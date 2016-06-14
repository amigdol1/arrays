$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var petInput = $("input#pet").val();
    var foodInput = $("input#food").val();
    var familyInput= $("input#family").val();

    $("#pet").text(petInput);
    $("#food").text(foodInput);
    $("#family").text(familyInput);

    var array = [petInput, foodInput, familyInput];
    console.log(array);

    event.preventDefault();

  });
});
