// check out http://www.w3schools.com/js/js_dates.asp

  var d = new Date();

  var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var month = []; // modern way of writing: var month =new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


//change default 24 hour time to 12 hour time
var hour = (d.getHours());

// define a string to show am and pm with the time
var amPm = " ";

if (hour >= 11){
  amPm = " pm";
}else {
  amPm = " am";
}

// translate 24 hour clock time into 12 hour clock
  if (hour === 0){
       hour = 12;
    }else if (hour >= 13){
       hour = hour - 12;
    }else if (hour >= 1 && hour <= 9 ) {
        hour = "0" + hour;
}
// setting up variables to shorten the message written to the page
var n = day[d.getDay()];
var m = month[d.getMonth()];
var min = d.getMinutes();
var dateNum = d.getDate();

// add leading 0 to minutes from 0 to 9
if ( min >= 0 && min <= 9){
  min = "0" + min;
} else {
  min = min;
}

//http://www.w3schools.com/jsref/met_document_getelementbyid.asp

document.getElementById("today").innerHTML =
  n + ", " + dateNum +" " + m + " " + d.getFullYear() + "  --   " + hour + ":" + min + amPm;

// document.getElementById("time").innerHTML = hour + ":" + min + amPm;
