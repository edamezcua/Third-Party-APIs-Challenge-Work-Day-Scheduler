moment(Date);
$("#currentDay").text(moment().format("dddd MMMM Do YYYY, h:mm a"));
var currentTime = moment();
currentTime = currentTime.startOf("hour");
var beforeTime = moment().startOf("day").add(9, "hours");

$(".saveBtn").click(function () {
  var textArea = $(this).siblings(".description").val();
  
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, textArea);
});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

function hourBlocks() {
  var currentHour = moment().hours();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
hourBlocks();
