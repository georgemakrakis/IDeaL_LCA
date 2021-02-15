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
  console.log("+++", result);

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

function createPDF(canvasImg, LifeExpectancyTableImg, list) {
  
  // console.log(LifeExpectancyTableImg);

  // creates PDF from the img that the chart is converted to
  var doc = new jspdf.jsPDF();
  doc.setFontSize(11);

  var lMargin=15; //left margin in mm
  var rMargin=15; //right margin in mm
  var pdfInMM=210;  // width of A4 in mm

  var text = []
  for (var i in list) {
    //console.log(list[i]);
    text.push(list[i]);
  }

  // Wrap the text in the page's margnins defined above
  var lines = doc.splitTextToSize(text, (pdfInMM-lMargin-rMargin));
  doc.text(lMargin,20,lines);

  // Add the chart/plot      
  doc.addImage(canvasImg, 'JPEG', 20, 180, 160, 100, 'NONE');
  // doc.addImage(LifeExpectancyTableImg, 'JPEG', 20, 100, 100, 80);

  doc.save('report.pdf');
}