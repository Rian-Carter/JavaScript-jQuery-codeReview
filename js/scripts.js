$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    event.preventDefault();
    $("#python").hide();
    $("#javascript").hide();
    $("#ruby").hide();

    const color = parseInt($("#color").val());
    if (!color) {
      alert("please select a color");
      return;
    }
    const animal = parseInt($("#animal").val());
    if (!animal) {
      alert("Please select an animal");
      return;
    }
    const shape = parseInt($("#shape").val());
    if (!shape) {
      alert("Please select a shape");
      return;
    }
    const activity = parseInt($("#activity").val());
    if (!activity) {
      alert("Please select an activity");
      return;
    }
    const country = parseInt($("#country").val());
    if (!country) {
      alert("Please select a country");
      return;
    }

    const score = color + animal + shape + activity + country;
    clearForm();


    if (score >= 11 && score <= 15) {
      $("#python").show();
      return;
    } else if (score >= 6 && score <= 10) {
      $("#javascript").show();
      return;
    } else { 
      $("#ruby").show();
      return;
    }
  });
});

function clearForm(){
  $("#color").val("0");
  $("#animal").val("0");
  $("#shape").val("0");
  $("#activity").val("0");
  $("#country").val("0");
}