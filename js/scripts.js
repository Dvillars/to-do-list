//business logic
function ToDoList(item) {
  this.itemName = item
};

// user interface logic
$(document).ready(function() {
  $("form#blank").submit(function(event) {
    event.preventDefault();

    var inputItem = $("input#new-item").val();

    var newItem = new ToDoList(inputItem);

    $("ul#items").append("<li><span class='item'>" + newItem.itemName + ' ' + "</span><button class='edit'>edit</button> <button class='delete'>delete</button></li>");

    // $(".item").last().click(function() {
    //   $(this).toggleClass("strike");
    // });
    var counter = true;
    $('.edit').off().click(function(){

    if (counter === true) {
      $(this).parent().children(':first-child').prop('contenteditable', true).toggleClass("edit-color");
      counter = false;
    } else {
      $(this).parent().children(':first-child').prop('contenteditable', false).toggleClass("edit-color");
      counter = true;
    }
    });

    $(".delete").click(function() {
      $(this).parent().remove();
    });


    $("input#new-item").val("");
  });
});
