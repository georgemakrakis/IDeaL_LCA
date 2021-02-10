// Adopted from https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/

var csv1 = [];
var csv2 = [];
var filename1;
var filename2;

function exportTableToCSV(indicator, filename, count) {

    var tempCSV = [];

    var metric_elements =$('#customTableLifeExpectancy tbody .metric');
    var location_elements =$('#customTableLifeExpectancy tbody .location');
    var score_elements = $('#customTableLifeExpectancy tbody .score');
    var totalScore_elements = $('#customTableLifeExpectancy tbody .totalScore');

    var metrics = [];
    metric_elements.each(function () {
        metrics.push($(this).val());
    });

    var location = [];
    location_elements.each(function () {
        location.push($(this).val());
    });
    
    var score = [];
    score_elements.each(function () {              
        score.push($(this).val());
    });

    var totalScore = [];
    totalScore_elements.each(function () {
        totalScore.push($(this).val());
    });

    // console.log("+++"+metrics);
    // console.log("+++"+location);
    // console.log("+++"+score);
    // console.log("+++"+totalScore);
    var header = ['Indicator','Metric','Location','Score','Total Score']
    var row = [];

    tempCSV.push(header.join(","));

    metrics.forEach(function(metric, index){
        if(index ==0){
            row.push(indicator)
        }
        else{
            row.push("");
        }
        row.push(metric, location[index], score[index], totalScore[index])
        tempCSV.push(row.join(","));
        row = [];
    });

    if(count == 1){
        csv1 = tempCSV;
        filename1 = filename;
    }

    if(count == 2){
        csv2 = tempCSV;
        filename2 = filename;

        // Download CSV file
        downloadCSV(csv1.join("\n"), filename1);
        // Download CSV file
        downloadCSV(csv2.join("\n"), filename2);
    }

    
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}