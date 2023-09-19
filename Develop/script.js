// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // TODO: Add code to display the current date in the header of the page.
  const currentDayElement = document.getElementById("currentDay");
  const currentDay = dayjs().format("YYYY-MM-DD");
  currentDayElement.textContent = currentDay;
  console.log (currentDay);
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

    // jQuery event listener
    $('button').on('click', function() {
    
    //select the text area elements and make an empty array  
    var formDataValue = [];
    var formData= $(".col-8.col-md-10.description");
    console.log('formData', formData);
    //Iterate text area elements
    $(formData).each(function() {
      var value = $(this).val();
    //push each text area form into an array
      formDataValue.push(value);
    });
    //Make the array a JSON string
    var jsonVal = JSON.stringify(formDataValue);
    //push the array and store into local storage
    localStorage.setItem("formDataValues", jsonVal);
  
    });
    // ? is this on page load to check for local storage ?
    // ? searching with else if first?
    
    //get local stored array data and parse to string (jsonVal not defined?)
    var userArr = JSON.parse (localStorage.getItem("formDataValues"));
    //loop the arrays to set value?
    for (var i = 0; i <userArr.length; i++) {
    //store loop in variable  
      var elByID = 'id' + i; //is format hour-9, hour-10 etc work or id??
    //varible for element by id
      var el = document.getElementById(elByID);
      el.value = userArr[i];
    }

    localStorage.setItem('formDataValues', JSON.stringify(userArr));
    
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  

   // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  
  
  
