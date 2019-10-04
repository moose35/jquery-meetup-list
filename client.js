console.log('js')

let numberOfMeetups = 3;

$(document).ready(onReady);

function onReady(){
    console.log('jQ working');
    $('#addMeetup').on('click', handleAddGroupClick);
    $('#addMeetup').on('click', inputClear);
    $('tbody').on('click', '.deleteButton', handleDeleteClick);
}

function handleAddGroupClick(){
    console.log('New group is being added');
    console.log($('#newGroup').val());
    console.log($('#meetupDate').val());
    $('#meetInfo').append('<tr>' + 
    "<td>" + $('#newGroup').val() + "</td>" + 
    "<td>" + $('#meetupDate').val() + "</td>" + 
    `<td><button class="deleteButton">Delete</button>` + "</tr>");
}

function inputClear() {
    $("#newGroup").val("");
    $("#meetupDate").val("");
  }
  
  function handleDeleteClick(){
    $('.deleteButton').on('click', 
    console.log('Delete clicked'));
  }
  