var app = angular.module('oddsgeir');
app.controller('brokenCtrl', ['$scope', 'testDataService', 'sortingService',
      'localStorageService', 'betexScraper',
      function($scope, testDataService, sortingService, localStorageService,
      betexScraper) {
  var thiss = this;

  $scope.matches = localStorageService.getMatches();
  if($scope.matches == undefined || $scope.matches.length == 0) {
    $scope.matches = [];
    console.log("Data ikke i localstore");
    refreshData();
  }
  else {
    console.log("Data i localstore");
  }

  //callback from getting betex data
  this.callback = function(leagues) {
    $scope.$apply(function(){
      var matches = [];

      for(var i = 0; i < leagues.length; i++) {
        matches = matches.concat(leagues[i].getMatches());
      }
      for(var i = 0; i < matches.length; i++) {
        matches[i].beregnBunnscore();
        matches[i].league = null;//OBSOBS: Her fjerner vi ligaen når vi ikke trenger den mer. Det for å kunne lagre json uten sykliske refs
      }
      console.log(matches);
      localStorageService.storeMatches(matches);
      $scope.matches = matches;

      $scope.showSpinner = false;

      //feilhåndtering, sjekker feil rapportert i scraperen
      var errs = betexScraper.getErrs();
      if(errs.length > 0) {
        var strng = "";
        for(var i = 0; i < errs.length; i++) {
          strng += errs[i] + "\n";
        }
        alert("Det skjedde en eller annen feil da gitt. Send Eirik en melding med feilen under.\n\nFeil:\n" + strng);
      }
    });
  }

  //update betex data
  function refreshData() {
    $scope.matches.length = 0;
    $scope.showSpinner = true;
    var promise = betexScraper.scrape(thiss);
  }

  $scope.refreshData = function() {
    refreshData();
  }
}]);
