var Match = class Match {

	constructor(homeTeam, awayTeam, date, bunnscore, url) {
		this.homeTeam = homeTeam;//string
		this.awayTeam = awayTeam;//string
		this.date = date;
		this.url = url;

		if(bunnscore == null) this.bunnscore = 0;
		else this.bunnscore = bunnscore
	}

	printable() {
		return this.bunnscore + " - " + this.date + ': ' + this.homeTeam + ' - ' + this.awayTeam;
	}

	beregnBunnscore() {
		if(this.league != null) {
			var homescore = -1;
			var awayscore = -1;
			for(var i = 0; i < this.league.standings.length; i++) {
				if(this.league.standings[i] == this.homeTeam) {
					homescore = this.league.standings.length - i - 1;
				}
				if(this.league.standings[i] == this.awayTeam) {
					awayscore = this.league.standings.length - i - 1;
				}
			}
			this.bunnscore = homescore + awayscore;
		}
		else {
			this.bunnscore = -1;
		}
	}
}
