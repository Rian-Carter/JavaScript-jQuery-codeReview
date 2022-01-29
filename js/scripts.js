$(document).ready(function() {
  $("#surveyQuestions").submit(function(event) {
    event.preventDefault();
    // $("#python").hide();
    // $("#javascript").hide();
    // $("#ruby").hide();

    const color = parseInt($("#color").val()); {
    }
    const animal = parseInt($("#animal").val()); {
      // alert("Please select a color");
    }
    const shape = parseInt($("#shape").val()); {
    }
    const activity = parseInt($("#activity").val()); {
    }
    const country = parseInt($("#country").val()); {
    }
    const score = color + animal + shape + activity + country;
    clearForm();


    if (score >= 11 && score <= 15) {
      $("#python").show();
    } else if (score >= 6 && score <= 10) {
      $("#javascript").show();
    } else (score >= 1 && score <= 5) 
      $("#ruby").show();
  });
});

function clearForm(){
  $("#color").val("0");
  $("#animal").val("0");
  $("#shape").val("0");
  $("#activity").val("0");
  $("#country").val("0");
}