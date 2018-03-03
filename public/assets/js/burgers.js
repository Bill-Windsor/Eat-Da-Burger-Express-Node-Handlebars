// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {

// Add burger to our data base
  $("#addBurger").on("click", function() {

// Create new Burger object for the database
  var burger = {
      "burger_name": $(burgerName).val(),
      "devoured": $(burgerName).data("eaten")
    };

    $.post("/api/burger", burger).done(function(response) {
// Reload the page to get the updated list
      location.reload();
    });
  });


// Update Burger with button submit
  $(".burgerBlock").on("click", function() {

    const burgerID = $(this).data("id");
    const devoured = $(this).data("eaten");

    const burgerUpdate = {
      "devoured": devoured
    };

    console.log("button id is " + burgerID);

    $.ajax("/api/burger/" + burgerID, {
      type: "PUT",
      data: burgerUpdate
    }).done(function(response) {
      location.reload();
    });
  });
});
