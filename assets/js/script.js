var currentDate = moment().format('MMMM Do YYYY');

var hour = moment().format("HH");

var pastthings = $('.hour-time');

console.log(currentDate);
$('#currentDay').text(currentDate);

var loadedTasks = localStorage.getItem('task');

loadedTasks = JSON.parse(loadedTasks);

$(".text-box").each(function (index) {
  $(this).text(loadedTasks[index])  
})

$('.edit-task').on("click", function () {
    var text = $(this).children("p")
        .text()
        .trim();
    var textInput = $('<textarea>')
        .addClass("text-box")
        .val(text);
    $(this).children("p").replaceWith(textInput);
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
    saveTask();
})

$('.saveBtn').on('click', saveTask);

pastthings.each(function (index) {
    // console.log(index + ": " + $(this).text());
    let timeBlock = parseInt($(this).text());
    if (timeBlock < hour) {
        $(this).parent().addClass("past");
    }
    else if (timeBlock > hour) {
        $(this).parent().addClass("future");
    }
    else {
        $(this).parent().addClass("present");
    }
});

function saveTask() {
    var taskText = []

    for (var i = 0; i < $(".text-box").length; i++) {
        taskText.push($(".text-box")[i].innerHTML);
    }
    
    localStorage.setItem("task", JSON.stringify(taskText));
}

