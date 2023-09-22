$(function () {

// TODO: Add code to display the current date in the header of the page.
  var currentDayElement = document.getElementById("currentDay");
  var currentDay = dayjs().format("MM-DD-YYYY"); // Current Day and format
  currentDayElement.textContent = currentDay;
  console.log (currentDay);
  
});

//jQuery button clickevent listener runs whent the doc is ready
  $(document).ready(function() {
    $('button').on('click', function() {
    console.log("enter")
  //Variable that gets the value of the textarea that is a sibling(have same parent) of the button
  //$(this) refers to the button that triggered the event
    var textArea = $(this).siblings("textarea").val()
    console.log(textArea);
      
  // Variable that gets the ID of the parent element of the button
    var hour = $(this).parent().attr("id")
    console.log(hour);

  // stores the textarea value in local storage under the key of the parent element's ID.
    localStorage.setItem(hour, textArea);   
    });

  // Variable now to use dayjs
    var now = dayjs();
  //Iterates numerically from 9 to 17
    for(let i = 9; i <= 17; i++){
  // Get the ID of the textarea element.
    var hour = "hour-"+ i
  // Get the value of the textarea element from local storage.
    var textArea = localStorage.getItem(hour)

  // Set the value of the textarea element.
    $('#'+hour).children("textarea").val(textArea)
    console.log(now.hour(), i);
      
    if (now.hour() === i ) {
  //add class present
    $('#'+hour).addClass('present');
   
    } else if (i < now.hour()) {
    $('#'+hour).addClass('past');
  //add class past
    } else {
  //add class future;
    $('#'+hour).addClass('future');
    }   
  }   
  });

  
 
  
