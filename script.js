//using moment.js
var moment = moment();
var btn = document.querySelector("#mybutton");

$("#currentDay").text(moment.format("MMMM Do, YYYY"));

//save input text in local storeage when button is clicked, done for each button bc input is different. 
$("#button1").click(function (event) {
    event.preventDefault();
    var text = document.querySelector("#input1").value;
    localStorage.setItem("9am", text);
});
$("#button2").click(function (event) {
  event.preventDefault();
  var text = document.querySelector("#input2").value;
  localStorage.setItem("10am", text);
});
$("#button3").click(function (event) {
  event.preventDefault();
  var text = document.querySelector("#input3").value;
  localStorage.setItem("11am", text);
});
$("#button4").click(function (event) {
  event.preventDefault();
  var text = document.querySelector("#input4").value;
  localStorage.setItem("Noon", text);
});
$("#button5").click(function (event) {
  event.preventDefault();
  var text = document.querySelector("#input5").value;
  localStorage.setItem("1pm", text);
});
$("#button6").click(function (event) {
  event.preventDefault();
  var text = document.querySelector("#input6").value;
  localStorage.setItem("2pm", text);
});
$("#button7").click(function (event) {
  event.preventDefault();
  var text = document.querySelector("#input7").value;
  localStorage.setItem("3pm", text);
});
$("#button8").click(function (event) {
  event.preventDefault();
  var text = document.querySelector("#input8").value;
  localStorage.setItem("4pm", text);
});
$("#button9").click(function (event) {
  event.preventDefault();
  var text = document.querySelector("#input9").value;
  localStorage.setItem("5pm", text);
});
 



//SAVING IN LOCAL STOREAGE 

// $("#input-01").val(localStorage.getItem("hour-01"))//do this for each input 
// function showNotice() {
//     $(".save-notice").show()
//     setTimeout(function () {
//         $(#savenotice).hide()
//     }, 1000);
// }
//id for every button id for every input 
// $("#button-01").click(function () {
//     var inputVal = $(this).siblings('input'.val());
//     console.log(inputVal);
//     localStorage.setItem("hour-01", inputVal)
   // showNotice();
// })




