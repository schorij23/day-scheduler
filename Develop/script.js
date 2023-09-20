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

  $(document).ready(function() {
    $('button').on('click', function() {
      console.log("enter")
    //variable for text area class
    var textArea= $(".col-8.col-md-10.description");
    //select the text area elements and make an empty array  
    var textAreaValue = [];
    //Iterate text area elements with .each()
    $(textArea).each(function() {
   //variable using $(this) to reference textArea elements
      var value = $(this).val();
    //push each text area form into an textAreaValue array
      textAreaValue.push(value);
    });
    //push the array and store into local storage make a string
    localStorage.setItem("formDataValues", JSON.stringify(textAreaValue));
  });
 });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

    // //To get data from local storage?
    // var formDataArr = JSON.parse(localStorage.getItem(formDataValue));
   
    // //////OR val method?
    // $('#hour-9').val(localStorage.getItem(".col-8.col-md-10.description"));

    // $('#hour-9');// hour-9 or id

    // // ? is this on page load to check for local storage ?
    // // ? search with else if first?
    
    
    // $(document).ready(function() {
    //   var userArr = localStorage.getItem('formDataValues', jsonVal);

    //   var formDataValues = JSON.parse(userArr);
      
    //   $.each(formDataValues, function(index, value) {
    //     $("#textarea" + (index+1)).val(value);
    //   });
    // });
   // //get local stored array data and parse to string (jsonVal not defined?)
    // var userArr = JSON.parse (localStorage.getItem("formDataValues"));
    
    //  //loop the arrays to set value?
    // for (var i = 0; i <userArr.length; i++) {
    // //store loop in variable  
    //   var elByID = 'hour-9' + i; //??is format hour-9, hour-10 etc work or id??
    // //varible for element by id
    //   var el = document.getElementById(elByID);
    //   el.value = userArr[i];
    // }
    // localStorage.setItem('formDataValues', JSON.stringify(userArr));
    
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
   

   // if/else if/ else statment for past, present and future
   //use with current time



   // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  
  
  
