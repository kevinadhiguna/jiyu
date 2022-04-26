import { format, compareAsc, compareDesc } from "date-fns";

const formattedDate = format(new Date(2022, 3, 25), "yyyy-MM-dd");
console.log("Formatted Date :", formattedDate); // Formatted Date : 2022-04-25

const dates = [
  new Date(2001, 7, 23),
  new Date(2009, 9, 15),
  new Date(2011, 9, 18),
];
console.log("Sorting dates - ascending :", dates.sort(compareAsc));
// Sorting dates - ascending : [
//   2001-08-23T00:00:00.000Z,
//   2009-10-15T00:00:00.000Z,
//   2011-10-18T00:00:00.000Z
// ]

console.log("Sorting dates - descending :", dates.sort(compareDesc));
// Sorting dates - descending : [
//   2011-10-18T00:00:00.000Z,
//   2009-10-15T00:00:00.000Z,
//   2001-08-23T00:00:00.000Z
// ]
