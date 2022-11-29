var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
// Text hour var
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");


var hour = moment().hours();
var userInput;
var hourSpan;
// var hourString = $(".hour").text().split(" ");

// Date and Hour

var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
                      + momentNow.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate);
}, 100);

function initPage() {

  console.log("Current Hour " + hour);
  var init9 = JSON.parse(localStorage.getItem("9 am"));
  nineAm.val(init9);

  var init10 = JSON.parse(localStorage.getItem("10 am"))
  tenAm.val(init10);
  
  var init11 = JSON.parse(localStorage.getItem("11 am"))
  elevenAm.val(init11);
  
  var init12 = JSON.parse(localStorage.getItem("12 pm"))
  twelvePm.val(init12);
  
  var init1 = JSON.parse(localStorage.getItem("1 pm"))
  onePm.val(init1);
  
  var init2 = JSON.parse(localStorage.getItem("2 pm"))
  twoPm.val(init2);
  
  var init3 = JSON.parse(localStorage.getItem("3 pm"))
  threePm.val(init3);
 
  var init4 = JSON.parse(localStorage.getItem("4 pm"))
  fourPm.val(init4);
  
  var init5 = JSON.parse(localStorage.getItem("5 pm"))
  fivePm.val(init5);
} 

function background () {
      
  $(".form-control").each(function () {
      var currentTime = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(currentTime);
      console.log(hour);
//      console.log(this);
      if (hour > currentTime) {
          $(this).addClass("past");
      } else if (hour < currentTime) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  initPage()
  background()

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

});