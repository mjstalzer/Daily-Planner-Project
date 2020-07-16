// this displays the current weekday, month, and number day \\
$("#currentDay").html(moment().format('dddd, MMMM Do'));

// variable that sets the current time which is always changing \\
var currentTime = moment().hours();

function updateTime(){

    $(".time-block").each(function(){
        var time = $(this).attr("id")
        console.log(currentTime)
        if(currentTime === parseInt(time)){
            $(this).find("#event").addClass("present")
            console.log("present" + time)
        } else if (currentTime < parseInt(time)){
            $(this).find("#event").addClass("future")
            console.log("future" + time)
        } else if (currentTime > parseInt(time)){
            console.log("past" + time)
            $(this).find("#event").addClass("past")
        }
    })
    setTimeout(updateTime, 1000)
}
updateTime();


var saveEvent = $(".saveBtn")

saveEvent.on("click" , function(){
    
    var time = $(this).parent().attr("id")
    console.log(time)
    var todo = $(this).siblings("#event").val();
    console.log(todo)
    localStorage.setItem(time , todo)
    console.log(localStorage.getItem(time))


})

$("#9 #event").val(localStorage.getItem("9"))
$("#10 #event").val(localStorage.getItem("10"))
$("#11 #event").val(localStorage.getItem("11"))
$("#12 #event").val(localStorage.getItem("12"))
$("#13 #event").val(localStorage.getItem("13"))
$("#14 #event").val(localStorage.getItem("14"))
$("#15 #event").val(localStorage.getItem("15"))
$("#16 #event").val(localStorage.getItem("16"))
$("#17 #event").val(localStorage.getItem("17"))
$("#18 #event").val(localStorage.getItem("18"))