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
    //any saved data from the localStorage should load
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    function hourMonitor() {
        //retrieves the current number of hours using moment.js
        var currentHour = moment().hour(); 

        //loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            console.log (blockHour, currentHour)

            //verifies if time has passed and goes to css/html given the current state
            if (blockHour < currentHour) {
                $(this).addClass("past");
                

            }

            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
               

            }

            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        });
    }
   
    hourMonitor();

    var interval = setInterval(hourMonitor, 15000);

})