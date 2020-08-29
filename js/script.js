var currentDate = moment().format('MMMM Do YYYY');

console.log(currentDate);
$('#currentDay').text(currentDate);

$('.edit-task').on("click", "p", function () {
    var text = $(this)
        .text()
        .trim();
    var textInput = $('<textarea>')
        .addClass("text-box")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger('focus');
});

$(".edit-task").on('blur', 'textarea', function () {
    var text = $(this)
        .val()
        .trim();

    var taskP = $("<p>")
        .addClass("text-box")
        .text(text);

    $(this).replaceWith(taskP);
})

var hour = moment().format("HH");
console.log(hour);

var pastthings = $('.hour-time')
console.log(pastthings)

pastthings.each(function( index ) {
    console.log( index + ": " + $( this ).text() );
    let timeBlock = parseInt($(this).text());
    if(timeBlock < hour)
    {
        console.log("Should be past");
        $(this).parent().addClass("past");
    }
    else if(timeBlock > hour)
    {
        console.log("Should be future");
        $(this).parent().addClass("future");
    }
    else
    {
        console.log("Right now!");
        $(this).parent().addClass("present");
    }
  });