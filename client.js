console.log('js')

let numberOfMeetups = 3;

$(document).ready(onReady);

function onReady(){
    console.log('jQ working');
    $('#addMeetup').on('click', handleAddGroupClick);
    $('#addMeetup').on('click', inputClear);
}

function handleAddGroupClick(){
    console.log('New group is being added');
    console.log($('#newGroup').val());
    console.log($('#meetupDate').val());
    
}

function inputClear() {
    $("#newGroup").val("");
    $("#meetupDate").val("");
  }
  