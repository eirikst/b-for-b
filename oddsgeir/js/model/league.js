var League = class League {

	constructor(name, nation, url) {
		this.nameStr = name;//string
		this.nationStr = nation;//string
		this.url = url;//string
		this.matches = [];
		this.standings = [];
	}

	addMatch(match) {
		this.matches.push(match);
	}

	setStandingsUrl(standingsUrl) {
		this.standingsUrl = standingsUrl;
	}

	getStandingsUrl() {
		return this.standingsUrl;
	}

	getMatches() {
		if(this.matches == null) {
			return [];
		}
		return this.matches;
	}

	setStandings(standings) {
		this.standings = standings;
	}

	getStandings() {
		return this.standings;
	}

	toString() {
		return this.nation + " " + this.name;
	}
}
