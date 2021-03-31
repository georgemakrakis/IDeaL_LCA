// Adopted from https://www.codexworld.com/export-html-table-data-to-csv-using-javascript/

var csv1 = [];
var csv2 = [];
var filename1;
var filename2;

function exportTableToCSVSocial(indicator, filename, count) {

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

        // Download CSV files
        downloadCSV(csv1.join("\n"), filename1);
        downloadCSV(csv2.join("\n"), filename2);
    }

    
}

// Type 1 for Pup, type 2 for Pmid, type 3 for Pdown
function exportTableToCSVEnvironmental(indicator, filename, count, type) {

    var tempCSV = [];

    var header = null;
    var mass_elements = null;
    var emFactor_elements = null;
    var distance_elements = null;

    if(type == 1){
        mass_elements = $('#customTablePup tbody .mass');
        emFactor_elements = $('#customTablePup tbody .emissionFactor');
        header = ['Indicator','Mass','Emission Factor Up'];
    }

    if(type == 2){
        mass_elements = $('#customTablePMid tbody .mass');
        emFactor_elements = $('#customTablePMid tbody .emissionFactor');        

        header = ['Indicator','Mass','Emission Factor Mid'];
    }

    if(type == 3){
        mass_elements =$('#customTablePDown tbody .mass');
        emFactor_elements =$('#customTablePDown tbody .emissionFactor');
        distance_elements = $('#customTablePDown tbody .distance');
        
        header = ['Indicator','Mass','Emission Factor Down', 'Distance'];
    }

    var masses = [];
    mass_elements.each(function () {
        masses.push($(this).val());
    });

    var emFactors = [];
    emFactor_elements.each(function () {
        emFactors.push($(this).val());
    });
    
    var distances = [];
    if(distance_elements !=null){
        distance_elements.each(function () {              
            distances.push($(this).val());
        });
    }
    
    var row = [];

    tempCSV.push(header.join(","));

    masses.forEach(function(mass, index){
        if(index ==0){
            row.push(indicator)
        }
        else{
            row.push("");
        }

        if(distances.length != 0){
            row.push(mass, emFactors[index], distances[index]);
        }
        else{
            row.push(mass, emFactors[index])
        }
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

        // Download CSV files
        downloadCSV(csv1.join("\n"), filename1);
        downloadCSV(csv2.join("\n"), filename2);
    }

    
}

function exportTableToCSVEconomic(indicator, filename, count, type) {

    var tempCSV = [];

    var header = null;
    var mass_elements = null;
    var cost_elements = null;

    if(type == 1){
        mass_elements =$('#customTableCup tbody .rawMass');
        cost_elements =$('#customTableCup tbody .transportationCost');
        
        header = ['Indicator','Raw Material Mass','Collection/Transportation Cost'];
    }

    if(type == 2){
        mass_elements = $('#customTableCMid tbody .rawMass');
        cost_elements = $('#customTableCMid tbody .productionCost');         

        header = ['Indicator','Raw Material Mass','Production Cost'];
    }

    if(type == 3){
        mass_elements =$('#customTableCDown tbody .finalMass');
        cost_elements =$('#customTableCDown tbody .distributionCost');  
        
        header = ['Indicator','Final Product Mass','Distribution Cost'];
    }

    var masses = [];
    mass_elements.each(function () {
        masses.push($(this).val());
    });

    var costs = [];
    cost_elements.each(function () {
        costs.push($(this).val());
    });   
    
    var row = [];

    tempCSV.push(header.join(","));

    masses.forEach(function(mass, index){
        if(index ==0){
            row.push(indicator)
        }
        else{
            row.push("");
        }

        row.push(mass, costs[index]);
        
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

        // Download CSV files
        downloadCSV(csv1.join("\n"), filename1);
        downloadCSV(csv2.join("\n"), filename2);
    }
    
}

function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], {type: "text/csv"});

    downloadLink = document.createElement("a");

    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    downloadLink.click();
}