$(function () {

  // TODO: Add code to display the current date in the header of the page.
  var currentDayElement = document.getElementById("currentDay");
  var currentDay = dayjs().format("MM-DD-YYYY");
  currentDayElement.textContent = currentDay;
  console.log (currentDay);
  
  var currentTime = dayjs(); // Current time
  var formattedTime = currentTime.format('h:mm:ss A'); // Format time
  console.log(formattedTime);
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

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
    for(let i=9; i<=17; i++){
    // Get the ID of the textarea element.
      var hour = "hour-"+ i
    // Get the value of the textarea element from local storage.
      var textArea = localStorage.getItem(hour)

    // Set the value of the textarea element.
      $('#'+hour).children("textarea").val(textArea)
      console.log(now.hour(), i);
      
      if (now.hour() === i ) {
        $('#'+hour).addClass('present');
        //add class present 
      } else if (i < now.hour()) {
        $('#'+hour).addClass('past');
        //add class past
      } else {
        //add class future;
        $('#'+hour).addClass('future');
    }
      
  }
      
   });
  
   
    

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
   
    
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
 
  
