// Reference: https://www.freecodecamp.org/news/reduce-f47a7da511a9/

// Goal scorers in FIFA World Cup 2022 Final
const scorers = ['messi', 'dimaria', 'mbappe', 'mbappe', 'messi', 'mbappe'];

const count = scorers.reduce((tally, scorer) => {
  if (!tally[scorer]) {
    tally[scorer] = 1;
  } else {
    tally[scorer] = tally[scorer] + 1;
  }
  return tally;
}, {});

console.log('Goals scored in FIFA World Cup 2022 Final  :', count);
// Goals scored in FIFA World Cup 2022 Final  : { messi: 2, dimaria: 1, mbappe: 3 }
