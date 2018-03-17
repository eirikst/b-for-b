var app = angular.module("oddsgeir");
app.service("localStorageService", ['$window', function($window) {

  this.storeMatches = function(matches) {
    this.storeObject("matches", matches);
  }

  this.getMatches = function() {
    var objects = this.getObject("matches");
    if(objects != undefined) {
      return this.fromObjectsToMatches(objects);
    }
    return undefined;
  }

  this.storeObject = function(key, value) {
    $window.localStorage[key] = JSON.stringify(value);
  }

  this.getObject = function(key) {
    if($window.localStorage[key] != undefined) {
      try {
        var json = JSON.parse( $window.localStorage[key] || false );
        console.log(json);
        return json
      }
      catch(e) {
        console.log("Local storage: " + e);
        return undefined;
      }
    }
  }


////////////////////////////////////////////////////////////////////////////////
  /*
   * Methods for converting teams and matches from json to objects of the classes
   * defined in model folder.
  */

  this.fromObjectsToMatches = function(objects) {
    matches = [];

    for(var i = 0; i < objects.length; i++) {
      matches.push(this.fromObjectToMatch(objects[i]));
    }
    return matches;
  }

  this.fromObjectToMatch = function(object) {
    var match = new Match(object.homeTeam, object.awayTeam, object.date, object.bunnscore, object.url);
    return match;
  }
}]);
