import { format } from "date-fns";

const formattedDate = format(new Date(2022, 3, 25), 'yyyy-MM-dd');
console.log("Formatted Date :", formattedDate); // Formatted Date : 2022-04-25
