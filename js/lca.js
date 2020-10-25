// Maybe we need this to be an array if we have multiple results for Life Excpectancy, Health etc.
var resultProcess1 = 0;
var resultProcess2 = 0;

function initializeChart(ctx){
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

function createResultsFromCSVTable(table){    
      
  // if (this.value == 'socialMethod' && table != null) {
  if (table != null) {                   

    // We only need from columns 1-6 correct? (No the first column?)
    var columnData = table.columns([1,2,3,4,5,6]).data();
    var rowsData = table.rows().data();          

    var uniqueCountries = Array.from(new Set(columnData[1]));

    var w_i = 1;
    var w_i_ok = true;

    // We traverse all rows to perform the required multiplication
    rowsData.each(row => {
      if($.isNumeric(row[6])){
        w_i *= row[6]; // be carefull, here we count from 0..n not from 1
      }
      else{        
        w_i_ok = false; // even if we find one string in the w_i's we put zero to that value
        return false;
      }                  
    });                

    // If we have noticed a string we return
    if(!w_i_ok)
    {          
      return{
        error: "One or more values in w_i is not a number"
      };
    }
    
    // The folloing value represent the equation: Indicator Value = (Sum of number of metrics * sum of number of locations * weight_i(Value_i))/number of metrics
    // be carefull, here whe count from 0..n not from 1
    var result = (columnData[0].length * uniqueCountries.length * w_i) / columnData[0].length;

    // Round result to 2 decimal points
    result = Math.round((result + Number.EPSILON) * 100) / 100;
    
    if(resultProcess1 != 0 && resultProcess2 == 0)
    {
      resultProcess2 = result;
    }
    if(resultProcess1 == 0 && resultProcess2 == 0)
    {
      resultProcess1 = result;
    }
              
    // console.log(result);    

    return {
      result1: resultProcess1,
      result2: resultProcess2,
      error: null
    };
  }
}

function updateChart(chart, label, resultProcess1, resultProcess2){
  var dataset = [
    {
      label: label,
      backgroundColor: 'rgb(0, 128, 255)',
      borderColor: 'rgb(0, 128, 255)',
      data: [resultProcess1, resultProcess2]
    }
  ];
  chart.data.datasets = dataset;
  chart.update();
}