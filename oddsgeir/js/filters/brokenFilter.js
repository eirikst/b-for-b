var app = angular.module('oddsgeir');

app.filter('brokenFilter', function() {
  return function(input, applyFilter, score, treDagerFrem) {

    if(!applyFilter) {
      return input;
    }


    //start filtering
    var output = [];
    var omTreDager = new Date();
    omTreDager.setDate(omTreDager.getDate() + 4);
    omTreDager.setHours(0);
    omTreDager.setMinutes(0);
    omTreDager.setSeconds(0);

    for(var i = 0; i < input.length; i++) {
      if(input[i].bunnscore > 0 && input[i].bunnscore <= score) {
        if(treDagerFrem) {
          if(parseDate(input[i].date) < omTreDager) {
            output.push(input[i]);
          }
        }
        else {
          output.push(input[i]);
        }
      }
    }

    return output;
  }

  function parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // note parts[1]-1
    return new Date(parts[2], parts[1]-1, parts[0]);
  }
});
