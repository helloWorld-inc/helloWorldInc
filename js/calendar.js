var dt = new Date();

function renderDate() {    
dt.setDate(1);

var day = dt.getDay();
var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
var today = new Date();
var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()];

var cells = "";

for (x = day; x > 0; x--) {
    cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
}

for (i = 1; i<=endDate; i++){
    if (i == today.getDate() && dt.getMonth() == today.getMonth()){
        cells += "<div class='today'>" + i + "</div>";
    } else {
    cells += "<div>" + i + "</div>";
    }
}

document.getElementsByClassName("days")[0].innerHTML = cells;
}



function moveDate(changeMonth) {
    if (changeMonth == 'prev'){
        dt.setMonth(dt.getMonth() - 1);
    } else if (changeMonth == 'next') {
        dt.setMonth(dt.getMonth() + 1);        
    }
    renderDate();
}


// front event page ------------------------------------------------------


function eventFront() {

    var frontAssignment = [10,11,12,13,14];
    dt.setDate(1);

    var day = dt.getDay();
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
    var today = new Date();  
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    document.getElementById("date_str").innerHTML = dt.toDateString();
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    
    var cells = "";    
    
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }    
    
    for (i = 1; i<=endDate; i++){
        for (k = 0; k < frontAssignment.length; k++) {
             if (i == frontAssignment[k]){
                 cells += "<div class='frontAssignment'>" + i + "</div>";
                 i++;
            }            
        }
        cells += "<div>" + i + "</div>"; 
    }    
    document.getElementsByClassName("days")[0].innerHTML = cells;
}


// DevOps event page ------------------------------------------------------

function eventDev() {

    var frontAssignment = [1,2,3,4,5,6,7,8,9];
    dt.setDate(1);

    var day = dt.getDay();
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
    var today = new Date();  
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    document.getElementById("date_str").innerHTML = dt.toDateString();
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    
    var cells = "";    
    
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }    
    
    for (i = 1; i<=endDate; i++){
        for (k = 0; k < frontAssignment.length; k++) {
             if (i == frontAssignment[k]){
                 cells += "<div class='devAssignment'>" + i + "</div>";
                 i++;
            }            
        }
        cells += "<div>" + i + "</div>"; 
    }    
    document.getElementsByClassName("days")[0].innerHTML = cells;
}

// Uxui event page ------------------------------------------------------

function eventUxui() {

    var frontAssignment = [22,23,24,25,26];
    dt.setDate(1);

    var day = dt.getDay();
    var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
    var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
    var today = new Date();  
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    document.getElementById("date_str").innerHTML = dt.toDateString();
    document.getElementById("month").innerHTML = months[dt.getMonth()];
    
    var cells = "";    
    
    for (x = day; x > 0; x--) {
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }    
    
    for (i = 1; i<=endDate; i++){
        for (k = 0; k < frontAssignment.length; k++) {
             if (i == frontAssignment[k]){
                 cells += "<div class='uxuiAssignment'>" + i + "</div>";
                 i++;
            }            
        }
        cells += "<div>" + i + "</div>"; 
    }    
    document.getElementsByClassName("days")[0].innerHTML = cells;
}