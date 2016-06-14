$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["pet", "food", "family"];
var array = [];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      array.push(userInput);
      // $("#" + blank).text(userInput);
    });

    console.log(array);

    event.preventDefault();

  });
});
