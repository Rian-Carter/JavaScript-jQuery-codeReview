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


    if (score === 11 && score === 15 && score === 12 && score === 13 && score ===14) {
      $("#python").show();
    } else if (score === 6 && score === 10 && score === 7 && score === 8 && score === 9) {
      $("#javascript").show();
    } else (score === 1 && score === 5 && score === 2 && score === 3 && score ===4) 
      $("#ruby").show();
  });
});

function clearForm(){
  $("#color").val("0");
  $("#animal").val("0");

}