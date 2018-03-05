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
      console.log("post to /api/burger in public>assets>burgers.js here");
// Reload the page to get the updated list
      location.reload();
    });
  });


// Update Burger with button submit
  $(".burgerBlock").on("click", function() {

    var burgerID = $(this).data("id");
    console.log("Burger ID value = " + burgerID);

    var devoured = $(this).data("eaten");
    console.log("'devoured' Boolean value = " + devoured);

    var burgerUpdate = {
      "devoured": devoured
    };

    $.ajax("/api/burger/" + burgerID, {
      type: "PUT",
      data: burgerUpdate
    }).done(function(response) {
      location.reload();
    });
  });
});
