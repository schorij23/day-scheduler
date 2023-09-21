// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add code to display the current date in the header of the page.
  var currentDayElement = document.getElementById("currentDay");
  var currentDay = dayjs().format("YYYY-MM-DD");
  currentDayElement.textContent = currentDay;
  console.log (currentDay);
  
  var currentTime = dayjs(); // Get the current time
  var formattedTime = currentTime.format('h:mm:ss A'); 
  console.log(formattedTime); 
});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

    //jQuery event listener
    $(document).ready(function() {
      $('button').on('click', function() {
        console.log("enter")
        var textArea = $(this).siblings("textarea").val()
        console.log(textArea);
        var hour = $(this).parent().attr("id")
        console.log(hour);
        localStorage.setItem(hour, textArea);
       
    });
   // Get any user input from localStorage and set the values of the corresponding textarea elements
    for(let i=9; i<=17; i++){
      var hour = "hour-"+ i
      var textArea = localStorage.getItem(hour)
      $("#"+hour).children("textarea").val(textArea)}
   });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
    
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
     
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
    // gets the current hour between 0-23 (commented out part)
      var now = dayjs();
      // var hourNow = now.hour();
      // console.log (hourNow);

      if ($('#') === now.hour()) {
        //code here for class "row time-block present" (red);
      } else if ($('#') < now.hour()) {
        //code here for class "row time-block past" (grey);
      } else {
        //code here for class "row time-block future" (green);
      }
  
  
