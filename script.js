//using moment.js
var today = moment();
//this will display in jumbotron in the format i specified right at success it will stick to the page and won't change unless page is reloaded. 
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));

