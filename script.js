$(document).ready(function () {
//display current date and time using moment.js
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a")); 


//saveBtn listening for click from user input and time stamps it
$(".saveBtn").on("click", function() {

    console.log(this);
    var text = $(this).siblings(".description").val(); //change is taken from sibling html? 
    var time = $(this).parent().attr("id"); //this change is from html parent id

    //items are set in local storage
    localStorage.setItem(time, text);
})


})