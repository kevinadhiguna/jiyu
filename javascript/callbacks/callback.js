let greeting = info => console.log('Hi', info, '!');

function getPlayerInfo(player, club, callback) {
  let playerInfo = player + ' of ' + club;
  callback(playerInfo);
}

getPlayerInfo('Cristiano Ronaldo', 'Real Madrid', greeting);
