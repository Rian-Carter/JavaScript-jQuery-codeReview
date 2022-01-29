$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    event.preventDefault();
    $("#python").hide();
    $("#javascript").hide();
    $("#ruby").hide();

    const color = parseInt($("#color").val());
    if (!animal) {
      alert("please select a color");
    }


    const animal = parseInt($("#animal").val());
    if (!animal) {
      alert("Please select an animal");
    }


    const shape = parseInt($("#shape").val());
    if (!shape) {
      alert("Please select a shape");
    }


    const activity = parseInt($("#activity").val());
    if (!activity) {
      alert("Please select an activity");
    }


    const country = parseInt($("#country").val());
    if (!country) {
      alert("Please select a country");
    }

    const score = color + animal + shape + activity + country;
    clearForm();


    if (score >= 11 && score <= 15) {
      $("#python").show();
    } else if (score >= 6 && score <= 10) {
      $("#javascript").show();
    } else { 
      $("#ruby").show();
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