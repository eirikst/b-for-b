var Team = class Team {

	constructor(nameStr, league) {
		this.nameStr = nameStr;
		this.league = league;
		this.matches = [];
	}

	addMatch(match) {
		this.matches.push(match);
	}

	addMatches(matches) {
		for(var i = 0; i < matches.length; i++) {
			this.matches.push(matches[i]);
		}
	}

	didWinMatch(nr) {
		return this.matches[nr].winner() === this.nameStr;
	}

	didLoseMatch(nr) {
		if(this.matches[nr].winner() == 'draw') {
			return false;
		}
		return this.matches[nr].winner() !== this.nameStr;
	}

	didDrawMatch(nr) {
		return this.matches[nr].winner() == 'draw';
	}
}
