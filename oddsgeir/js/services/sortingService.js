var app = angular.module("oddsgeir");

app.service("sortingService", function() {

  //Takes a team and sorts the matches with the most recent first
  this.sortMatchesForTeamRecentFirst = function(team) {

    team.matches.sort(function(a,b) {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    });

  }

  //Takes an array of teams and sorts the matches of each team by date(most recent first)
  this.sortMatchesForTeams = function(teams) {
    for(var i = 0; i < teams.length; i++) {
      this.sortMatchesForTeamRecentFirst(teams[i]);
    }
  }

});
