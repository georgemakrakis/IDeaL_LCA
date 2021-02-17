// Maybe we need this to be an array if we have multiple results for Life Excpectancy, Health etc.
var resultProcess1 = 0;
var resultProcess2 = 0;

function initializeChart(ctx) {
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['Current Approach', 'Proposed Approach'],
      datasets: []
    },

    // Configuration options go here
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            //max: 3000,
            stepSize: 500000
          }
        }]
      }
    }
  });
  return chart;
}

function createResultsFromCSVTable(table) {

  if (table != null) {

    var rowsData = table.rows().data();

    var w_xmis = [];
    
    rowsData.each(function (row, index){
      // Here we perform the calculation: Sum of number of metrics * sum of number of locations * weight_i(x_mi)
      w_xmis.push((row[3]/row[4])*row[3]);
    });
  
    //Some ES6 magic to find the average in one line (no for loops) to get: Sum of number of metrics * sum of number of locations * weight_i(x_mi)/number_of_metrics
    var average = (array) => array.reduce((a, b) => a + b) / w_xmis.length; 
    var result = average(w_xmis);

    // Round result to 2 decimal points
    result = Math.round((result + Number.EPSILON) * 100) / 100;

    return result;
  }
}

function createResultsFromCustomTable(metrics, countries, score, totalScore) {

  var weights = [];
  var w_xmis = [];

  for (var index=0 ; index<metrics; index++){

    var weight = score[index]/totalScore[index];
    weights.push(weight);
  }

  weights.forEach(function (weight, index) {
    var w_xmi = weights[index]*score[index];
    w_xmis.push(w_xmi);
  });

  //Some ES6 magic to find the average in one line (no for loops)
  var average = (array) => array.reduce((a, b) => a + b) / w_xmis.length; 
  var result = average(w_xmis);

  // Round result to 2 decimal points
  result = Math.round((result + Number.EPSILON) * 100) / 100

  return result;

}

function updateChart(chart, resultsLifeExpectancy, resultsEducation, resultsHealth, resultsSafety) {
  var dataset = [
    {
      label: "Life Expectancy",
      backgroundColor: 'rgb(0, 128, 255)',
      borderColor: 'rgb(0, 128, 255)',
      data: [resultsLifeExpectancy.result1, resultsLifeExpectancy.result2]
    },
    {
      label: "Education",
      backgroundColor: 'rgb(0, 255, 0)',
      borderColor: 'rgb(0, 255, 0)',
      data: [resultsEducation.result1, resultsEducation.result2]
    },
    {
      label: "Health",
      backgroundColor: 'rgb(255,0,0)',
      borderColor: 'rgb(255,0,0)',
      data: [resultsHealth.result1, resultsHealth.result2]
    },
    {
      label: "Safety",
      backgroundColor: 'rgb(255,255,0)',
      borderColor: 'rgb(255,255,0)',
      data: [resultsSafety.result1, resultsSafety.result2]
    }
  ];
  chart.data.datasets = dataset;
  chart.update();
}

function createPDF(canvasImg, LifeExpectancyTableImg, equation_image, list) {
  
  // console.log(LifeExpectancyTableImg);

  // creates PDF from the img that the chart is converted to
  var doc = new jspdf.jsPDF();
  doc.setFontSize(11);

  var lMargin=15; //left margin in mm
  var rMargin=15; //right margin in mm
  var pdfInMM=210;  // width of A4 in mm

  var text = []
  for (var i in list) {
    
    // if(list[i] === "Name of the project, Name and Email:" || list[i] === "Phase 1. Goal and scope definition:" 
    // || list[i] === "Phase 2. Life cycle inventory (LCI):" || list[i] === "Phase 3. Life cycle impact assessment (LCIA):"){
    //   const textWidth = doc.getTextWidth(list[i]);
    //   text.push(doc.line(lMargin, 20, lMargin + textWidth, 20));
    // }
    text.push(list[i]);
  }

  // Wrap the text in the page's margnins defined above
  var lines = doc.splitTextToSize(text, (pdfInMM-lMargin-rMargin));
  // console.log('++++'+lines);
  var y_margin = 20;

  lines.forEach(line => {
    if(line === "Name of the project, Name and Email:" || line === "Phase 1. Goal and scope definition:" 
    || line === "Phase 2. Life cycle inventory (LCI):" || line === "Phase 3. Life cycle impact assessment (LCIA):"
    || line === "Results:" || line ==="Phase 4: Interpretation:"){
      var textWidth = doc.getTextWidth(line);
      doc.line(lMargin, y_margin+1, lMargin + textWidth, y_margin+1);
    }
    
    doc.text(lMargin,y_margin,line);
    y_margin+=10;

    if(line === "Phase 3. Life cycle impact assessment (LCIA):"){
      
      if(equation_image!=null){
        doc.addImage(equation_image, 'JPEG', lMargin, y_margin+1, 40, 22);
        y_margin+=30;
      } 
    }
  });
  // doc.text(lMargin,20,lines);

  // Add the chart/plot      
  doc.addImage(canvasImg, 'JPEG', 20, 180, 160, 100, 'NONE');

  // Add the footer with the link to our tool
  doc.text("Created using the IDeaL LCA Tool:", 10, 295);
  doc.textWithLink("https://webpages.uidaho.edu/ideal/lca.html", 72, 295, {url: "https://webpages.uidaho.edu/ideal/lca.html"});
   
  // doc.addImage(LifeExpectancyTableImg, 'JPEG', 20, 100, 100, 80);

  doc.save('report.pdf');
}