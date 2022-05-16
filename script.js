//using moment.js
var moment = moment();
var hours = moment.format("h")
// console.log(typeof hours)

var nineAM = $("#ec1")
var tenAM = $("#ec2");
var elevenAM = $("#ec3");
var noon = $("#ec4");
var onePM = $("#ec5");
var twoPM = $("#ec6");
var threePM = $("#ec7");
var fourPM = $("#ec8");
var fivePM = $("#ec9");
console.log(nineAM)
// var btn = document.querySelector("#mybutton");

//using moment.js to input current day on top of page
//function displayTime(){
$("#currentDay").text(moment.format("MMMM Do, YYYY, h:mm:ss a"));
//}

if (hours === "9") {
  nineAM.addClass("present")
}
if (hours > "9") {
  nineAM.addClass("past")
}
else {
  nineAM.addClass("future")
}
if (hours === "10") {
  tenAM.addClass("present");
}
if (hours > "10") {
  tenAM.addClass("past");
} else {
  tenAM.addClass("future");
}
if (hours === "11") {
  elevenAM.addClass("present");
}
if (hours > "11") {
  elevenAM.addClass("past");
} else {
  elevenAM.addClass("future");
}
if (hours === "12") {
  noon.addClass("present");
}
if (hours > "12") {
  noon.addClass("past");
} else {
  noon.addClass("future");
}
if (hours === "1") {
  onePM.addClass("present");
}
if (hours > "1") {
  onePM.addClass("past");
} else {
  onePM.addClass("future");
}
if (hours === "2") {
  twoPM.addClass("present");
}
if (hours > "2") {
  twoPM.addClass("past");
} else {
  twoPM.addClass("future");
}
if (hours === "3") {
  threePM.addClass("present");
}
if (hours > "3") {
  threePM.addClass("past");
} else {
  threePM.addClass("future");
}
if (hours === "4") {
  fourPM.addClass("present");
}
if (hours > "4") {
  fourPM.addClass("past");
} else {
  fourPM.addClass("future");
}
if (hours === "5") {
  fivePM.addClass("present");
}
if (hours > "5") {
  fivePM.addClass("past");
} else {
  fivePM.addClass("future");
}

//save input text in local storeage when button is clicked, done for each button bc input is different so need a different key for each input to be stored properly. 
$("#button1").click(function (event) {
    event.preventDefault();
    var text = $("#input1").val();
    localStorage.setItem("9am", text);
});
$("#button2").click(function (event) {
  event.preventDefault();
  var text = $("#input2").val();
  localStorage.setItem("10am", text);
});
$("#button3").click(function (event) {
  event.preventDefault();
  var text = $("#input3").val();
  localStorage.setItem("11am", text);
});
$("#button4").click(function (event) {
  event.preventDefault();
  var text = $("#input4").val();
  localStorage.setItem("Noon", text);
});
$("#button5").click(function (event) {
  event.preventDefault();
  var text = $("#input5").val();
  localStorage.setItem("1pm", text);
});
$("#button6").click(function (event) {
  event.preventDefault();
  var text = $("#input6").val();
  localStorage.setItem("2pm", text);
});
$("#button7").click(function (event) {
  event.preventDefault();
  var text = $("#input7").val();
  localStorage.setItem("3pm", text);
});
$("#button8").click(function (event) {
  event.preventDefault();
  var text = $("#input8").val();
  localStorage.setItem("4pm", text);
});
$("#button9").click(function (event) {
  event.preventDefault();
  var text = $("#input9").val();
  localStorage.setItem("5pm", text);
});
 


//example of the saved notice shown from ollyu

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




