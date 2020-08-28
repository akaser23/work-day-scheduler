var currentDate = new Date();

var month = currentDate.getMonth()+1;
var day = currentDate.getDate();
var year = currentDate.getFullYear();

var output =  (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + year;
console.log(output);

// var output = document.getElementById('currentDay')