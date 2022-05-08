import isBefore from 'date-fns/isBefore';

// Is 11 August 2021 before 12 April 2021?
const result = isBefore(new Date(2021, 7, 11), new Date(2021, 3, 12));
//=> false

console.log("Is 11 August 2021 before 12 April 2021 ? ", result); // Is 11 August 2021 before 12 April 2021? false
