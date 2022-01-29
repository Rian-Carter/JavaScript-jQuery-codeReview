$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    event.preventDefault();

    const color = parseInt($("#color").val()); {

    }
    const animal = parseInt($("#animal").val()); {

    }
    const shape = parseInt($("#shape").val()); {

    }
    const activity = parseInt($("#activity").val()); {

    }
    const country = parseInt($("#country").val()); {

    }
    const number = color + animal + shape + activity + country;
  });