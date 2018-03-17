var app = angular.module("oddsgeir");
app.service("betexScraper", ['leagueService', function(leagueService) {
  var thiss = this;
  thiss.err = [];
  thiss.allLeagues = [];


  this.scrape = function(ctrl) {
    thiss.ctrl = ctrl;
    thiss.err = [];

    thiss.allLeagues = leagueService.allLeagues();

    var leaguesUrlPromise = thiss.findLeagues(thiss.allLeagues);

    leaguesUrlPromise.then(function() {
      var standingsPromise = thiss.findLeagueStandings(thiss.allLeagues);
      standingsPromise.then(function() {
        ctrl.callback(thiss.allLeagues);
      });
    })
  }

  this.findLeagues = function(leagues) {
    var promises = [];

    for(var i = 0; i < leagues.length; i++) {
      promises.push(fetchLeagueData(leagues[i]));
    }

    return Q.allSettled(promises)
    .then(function (results) {
      results.forEach(function (result) {
        if (result.state === "fulfilled") {
        } else {
          registerError("q feil: sannsynligvis feiler bare en eller annen liga.");
          var reason = result.reason;
          console.log("Q get error findMatches: " + reason);
          console.log(result);
        }
      });
    });
  }

  function fetchLeagueData(league) {
    var thisUrl = league.url;
    var thisCallback = function(data, response) {
      var matchesFromLeague = [];
      var teams = [];
      try {
        //find standings url
        league.setStandingsUrl("http://betexplorer.com" + $($(data).find("li.stats-menu-table")[0]).find("a").attr('href'));

        //find matches
        var table = $(data).find("table.table-main")[0];
        var tbody = $(table).find("tbody");
        var trs = $(tbody).find("tr");

        for(var i = 1; i < trs.length; i++) {
          if(trs[i].className != "") continue;

          var homeTeam = $($($(trs[i]).find("td")[1]).find("span")[0]).text();
          var awayTeam = $($($(trs[i]).find("td")[1]).find("span")[1]).text();
          var date = $($(trs[i]).find("td")[8]).text();
          var url = "http://betexplorer.com" + $($(trs[i]).find("td")[1]).find("a").attr('href');
          var match = new Match(homeTeam, awayTeam, date, null, url);
          match.league = league;
          league.addMatch(match);
        }
      }
      catch(e) {
        console.log("Failed getting league's matches: " + e);
        console.log(data);
        registerError("Failed getting league's matches: " + e);
        registerError(data);
      }
    };

    request = jQuery.ajax({
      url: thisUrl,
      success: thisCallback
    });

    return request;
  }

  this.findLeagueStandings = function(leagues) {
    var promises = [];

    for(var i = 0; i < leagues.length; i++) {
      promises.push(fetchStandings(leagues[i]));
    }

    return Q.allSettled(promises)
    .then(function (results) {
      results.forEach(function (result) {
        if (result.state === "fulfilled") {
        } else {
          var reason = result.reason;
          console.log("Q get error findLeagueStandings: " + reason);
          console.log(reason);
        }
      });
    });
  }

  function fetchStandings(league) {
    var thisCallback = function(data, response) {
      try {

        //find matches
        var tbody = $(data).find("tbody");
        var trs = $(tbody).find("tr");
        var standings = [];
        for(var i = 0; i < trs.length; i++) {
          standings.push($($(trs[i]).find("td")[1]).find("span.team_name_span").find("a").text());
        }
        league.setStandings(standings);
      }
      catch(e) {
        console.log("Failed getting league's matches: " + e);
        console.log(data);
        registerError("Failed getting league's matches: " + e);
        registerError(data);
      }
    };

    request = jQuery.ajax({
      url: league.standingsUrl,
      success: thisCallback
    });

    return request;
  }

  function registerError(msg) {
    thiss.err.push(msg);
  }

  this.getErrs = function() {
    return this.err;
  }

}]);
