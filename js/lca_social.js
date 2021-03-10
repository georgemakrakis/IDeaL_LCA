// Maybe we need this to be an array if we have multiple results for Life Excpectancy, Health etc.
var resultProcess1 = 0;
var resultProcess2 = 0;


function checkCSVHeader(data){ 
  
  if(data.length == 0){
    return false;
  }

  if(data[0].length != 5){
    return false;
  }

  if(data[0][0] !== "Indicator" || data[0][1] !== "Metric" || data[0][2] !== "Location" || data[0][3] !== "Score" || data[0][4] !== "Total Score"){  
    return false;
  }
  
  return true;
  
}

function initializeChart(ctx) {
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: ['Case Study Result', 'Proposed Study Result'],
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

  if (table == null) {
    return null;
  }

  var rowsData = table.rows().data();
  var w_xmis = []; var wrong_length = false;
  var wrong_type = false;
  
  Array.from(rowsData).forEach((function (row,index){

    if(row.length != 5){
      wrong_length = true;
    }

    if(isNaN(parseFloat(row[3])) || isNaN(parseFloat(row[4]))){
      wrong_type = true
    }

    w_xmis.push((parseFloat(row[3])/parseFloat(row[4]))*parseFloat(row[3]));
  }));

  // TODO: Possibly change the boolean variable with different error statusses
  if(wrong_length|| wrong_type){
    return null;
  }

  //Some ES6 magic to find the average in one line (no for loops) to get: Sum of number of metrics * sum of number of locations * weight_i(x_mi)/number_of_metrics
  var average = (array) => array.reduce((a, b) => a + b) / w_xmis.length; 
  var result = average(w_xmis);

  // Round result to 2 decimal points
  result = Math.round((result + Number.EPSILON) * 100) / 100;

  return result;
  
}

function createResultsFromCustomTable(metrics, countries, score, totalScore) {

  // console.log(metrics, countries, score, totalScore);

  var weights = [];
  var w_xmis = [];
  
  if(metrics == null || score == null || totalScore == null){
    return null;
  }

  if(metrics == 0 || score.length == 0 || totalScore.length == 0){
    return null;
  }

  for (var index=0 ; index<metrics; index++){

    if(isNaN(score[index]) || isNaN(totalScore[index])){
      return null;
    }

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

function updateChart(chart, indicators, resultsLifeExpectancy, resultsEducation, resultsHealth, resultsSafety) {
  var dataset = [
    {
      label: indicators[0],
      backgroundColor: 'rgb(0, 128, 255)',
      borderColor: 'rgb(0, 128, 255)',
      data: [resultsLifeExpectancy.result1, resultsLifeExpectancy.result2]
    },
    {
      label: indicators[1],
      backgroundColor: 'rgb(0, 255, 0)',
      borderColor: 'rgb(0, 255, 0)',
      data: [resultsEducation.result1, resultsEducation.result2]
    },
    {
      label: indicators[2],
      backgroundColor: 'rgb(255,0,0)',
      borderColor: 'rgb(255,0,0)',
      data: [resultsHealth.result1, resultsHealth.result2]
    },
    {
      label: indicators[3],
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

  if(! (Array.isArray(list) && list.length)){
    return null;
  }

  if(canvasImg == null || equation_image == null){
    return null;
  }

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
  doc.setFontSize(9);
  doc.text("Created using the IDeaL LCA Tool:", 10, 295);
  doc.textWithLink("https://webpages.uidaho.edu/ideal/lca.html", 62, 295, {url: "https://webpages.uidaho.edu/ideal/lca.html"});
  doc.setFontSize(11);
   
  // doc.addImage(LifeExpectancyTableImg, 'JPEG', 20, 100, 100, 80);

  doc.save('report.pdf');
}