// this displays the current weekday, month, and number day \\
$("#currentDay").html(moment().format('dddd, MMMM Do'));

// updateTime checks each div with a class of time-block and compares the time to currentTime \\ 
// the function decides which color to give each time-block \\ 

window.setInterval(function(){

    $(".time-block").each(function(){
        
        // the time variable stores each div's (with the time-block class) number id to be compared to the current time \\
        var time = $(this).attr("id");
        // timeNum converts the string of time into a number \\
        var timeNum = parseInt(time);
        
        // variable that sets the current time which is always changing \\
        var currentTime = moment().hours();

        // the following conditionals set the color of each time block \\ 
        if(currentTime === timeNum){
            $(this).find("#event").addClass("present")

        } else if (currentTime < timeNum){
            $(this).find("#event").addClass("future")

        } else if (currentTime > timeNum){
            $(this).find("#event").addClass("past")
        }
    })
}, 1000);


// saveEvent targets the class of save button on each row \\
var saveEvent = $(".saveBtn")

// the click event saves the text to local storage \\
saveEvent.on("click" , function(){
    
    // time targets the value (time) of the ID of the parent of .saveBtn \\
    var time = $(this).parent().attr("id")
    console.log(time)

    // todo grabs the value of the input that the user types \\ 
    var todo = $(this).siblings("#event").val();
    console.log(todo)

    // this stores the user input into local storage that is later displayed onto the page \\
    localStorage.setItem(time , todo)
    console.log(localStorage.getItem(time))
})

// these display each input with the event id with the text that the user saves into local storage \\ 
$("#9 #event").val(localStorage.getItem("9"));
$("#10 #event").val(localStorage.getItem("10"));
$("#11 #event").val(localStorage.getItem("11"));
$("#12 #event").val(localStorage.getItem("12"));
$("#13 #event").val(localStorage.getItem("13"));
$("#14 #event").val(localStorage.getItem("14"));
$("#15 #event").val(localStorage.getItem("15"));
$("#16 #event").val(localStorage.getItem("16"));
$("#17 #event").val(localStorage.getItem("17"));
$("#18 #event").val(localStorage.getItem("18"));