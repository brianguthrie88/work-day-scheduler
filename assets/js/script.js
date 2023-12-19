// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  //these are the variables that are being called throughout the code of elements in the html
  var currentDayEl = $('#currentDay');
  var saveBtnEL = $('.saveBtn');
  var hour9El = $('#hour-9');
  var hour10El = $('#hour-10');
  var hour11El = $('#hour-11');
  var hour12El = $('#hour-12');
  var hour1El = $('#hour-1');
  var hour2El = $('#hour-2');
  var hour3El = $('#hour-3');
  var hour4El = $('#hour-4');
  var hour5El = $('#hour-5');
  

  
  //this function reads items from storage and puts them back into objects so that they can be easily iterated through for displaying to the page
  function readItemsFromStorage() {
    var items = localStorage.getItem('items');
    if (items) {
      items = JSON.parse(items);
    } else {
      items = [];
    }
    return items;
  }

  //this function makes the items that are set to local storage strings so that they can be read by local storage
  function saveItemsToStorage(items) {
    localStorage.setItem('items', JSON.stringify(items));
  }

  //this function handles saving each task to the local storage as an array of objects
  function handleSaveItem() {
      var key = $(this).parent().attr('id');
      var value = $(this).siblings('.description').val().trim();
      var newItem = {
        time: key,
        toDO: value
      }
      var items = readItemsFromStorage();
      items.push(newItem);
      saveItemsToStorage(items);
  }

  //this funtion is used to get the items from and then paste them to the page when the app is reopened
  function getItemsFromStorage() {
    var items = readItemsFromStorage();
    
    for (var i =0; i < items.length; i++) {
      var time = items[i].time;
      var task = items[i].toDO;
      var textArea = $("#"+time+ " .description");
      textArea.val(task);
    }
  }
  
  //this function displays the current day in the header of the webpage
  function displayCurrentDate() {
    var today = dayjs().format('MMM DD, YYYY');
    currentDayEl.text(today);
  }
  
  //this function will tell what time it is currently and display a color for the timeslot of each our of the list and whether it is
  // in the past, present, or future.
  function pickColor() {
    //want to pick a color for each hour section based on the current time of day.
    var currentTime = parseInt(dayjs().format('H'));
    if (currentTime > 0 && currentTime < 9) {
      hour9El.css('background','#77dd77');
      hour10El.css('background','#77dd77');
      hour11El.css('background','#77dd77');
      hour12El.css('background','#77dd77');
      hour1El.css('background','#77dd77');
      hour2El.css('background','#77dd77');
      hour3El.css('background','#77dd77');
      hour4El.css('background','#77dd77');
      hour5El.css('background','#77dd77');
  
    } else if (currentTime > 17) {
      hour9El.css('background','#d3d3d3');
      hour10El.css('background','#d3d3d3');
      hour11El.css('background','#d3d3d3');
      hour12El.css('background','#d3d3d3');
      hour1El.css('background','#d3d3d3');
      hour2El.css('background','#d3d3d3');
      hour3El.css('background','#d3d3d3');
      hour4El.css('background','#d3d3d3');
      hour5El.css('background','#d3d3d3');
  
    } else if (currentTime == 9) {
      hour9El.css('background','#ff6961');
      hour10El.css('background','#77dd77');
      hour11El.css('background','#77dd77');
      hour12El.css('background','#77dd77');
      hour1El.css('background','#77dd77');
      hour2El.css('background','#77dd77');
      hour3El.css('background','#77dd77');
      hour4El.css('background','#77dd77');
      hour5El.css('background','#77dd77');
  
    } else if (currentTime == 10) {
      hour9El.css('background','#d3d3d3');
      hour10El.css('background','#ff6961');
      hour11El.css('background','#77dd77');
      hour12El.css('background','#77dd77');
      hour1El.css('background','#77dd77');
      hour2El.css('background','#77dd77');
      hour3El.css('background','#77dd77');
      hour4El.css('background','#77dd77');
      hour5El.css('background','#77dd77');
  
    } else if (currentTime == 11) {
      hour9El.css('background','#d3d3d3');
      hour10El.css('background','#d3d3d3');
      hour11El.css('background','#ff6961');
      hour12El.css('background','#77dd77');
      hour1El.css('background','#77dd77');
      hour2El.css('background','#77dd77');
      hour3El.css('background','#77dd77');
      hour4El.css('background','#77dd77');
      hour5El.css('background','#77dd77');
  
    } else if (currentTime == 12) {
      hour9El.css('background','#d3d3d3');
      hour10El.css('background','#d3d3d3');
      hour11El.css('background','#d3d3d3');
      hour12El.css('background','#ff6961');
      hour1El.css('background','#77dd77');
      hour2El.css('background','#77dd77');
      hour3El.css('background','#77dd77');
      hour4El.css('background','#77dd77');
      hour5El.css('background','#77dd77');
      
    } else if (currentTime == 13) {
      hour9El.css('background','#d3d3d3');
      hour10El.css('background','#d3d3d3');
      hour11El.css('background','#d3d3d3');
      hour12El.css('background','#d3d3d3');
      hour1El.css('background','#ff6961');
      hour2El.css('background','#77dd77');
      hour3El.css('background','#77dd77');
      hour4El.css('background','#77dd77');
      hour5El.css('background','#77dd77');
      
    } else if (currentTime == 14) {
      hour9El.css('background','#d3d3d3');
      hour10El.css('background','#d3d3d3');
      hour11El.css('background','#d3d3d3');
      hour12El.css('background','#d3d3d3');
      hour1El.css('background','#d3d3d3');
      hour2El.css('background','#ff6961');
      hour3El.css('background','#77dd77');
      hour4El.css('background','#77dd77');
      hour5El.css('background','#77dd77');
      
    } else if (currentTime == 15) {
      hour9El.css('background','#d3d3d3');
      hour10El.css('background','#d3d3d3');
      hour11El.css('background','#d3d3d3');
      hour12El.css('background','#d3d3d3');
      hour1El.css('background','#d3d3d3');
      hour2El.css('background','#d3d3d3');
      hour3El.css('background','#ff6961');
      hour4El.css('background','#77dd77');
      hour5El.css('background','#77dd77');
      
    } else if (currentTime == 16) {
      hour9El.css('background','#d3d3d3');
      hour10El.css('background','#d3d3d3');
      hour11El.css('background','#d3d3d3');
      hour12El.css('background','#d3d3d3');
      hour1El.css('background','#d3d3d3');
      hour2El.css('background','#d3d3d3');
      hour3El.css('background','#d3d3d3');
      hour4El.css('background','#ff6961');
      hour5El.css('background','#77dd77');
      
    } else if (currentTime == 17) {
      hour9El.css('background','#d3d3d3');
      hour10El.css('background','#d3d3d3');
      hour11El.css('background','#d3d3d3');
      hour12El.css('background','#d3d3d3');
      hour1El.css('background','#d3d3d3');
      hour2El.css('background','#d3d3d3');
      hour3El.css('background','#d3d3d3');
      hour4El.css('background','#d3d3d3');
      hour5El.css('background','#ff6961');
  
    } else {
      return;
    }
  }

  //these are the different calls to functions that need to be ran when the app is opened
  pickColor();
  getItemsFromStorage();
  displayCurrentDate();
  //this is a click event that when the save button is clicked, whatever the user put in as a todo will be saved to local storage.
  saveBtnEL.on('click', handleSaveItem);
  
});