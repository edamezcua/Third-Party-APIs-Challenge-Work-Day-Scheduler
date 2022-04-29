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
