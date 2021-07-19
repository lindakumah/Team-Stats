const team = {
    _players : [
      { firstName: 'Francis',
      lastName: 'Agyei',
      age: 27},
      {firstName: 'Ama',
      lastName: 'Amankwah',
      age: 30},
      {firstName: 'Joyce',
      lastName: 'Kumah',
      age: 34}
    ],
    _games : [
      {opponent: 'Heyteam',
      teamPoints: 30,
      opponentPoints: 28},
      {opponent: 'Ariteam',
      teamPoints: 38,
      opponentPoints: 31},
      {opponent: 'lynteam',
      teamPoints: 36,
      opponentPoints: 34}
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(opponentName, teamPoints, opponentPoints) {
      let game = {
        opponent: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players);
  
  team.addGame('Kotoko', 60, 40);
  team.addGame('Hearts', 40, 85);
  team.addGame('Hasaakas', 50, 38);
  
  console.log(team.games);