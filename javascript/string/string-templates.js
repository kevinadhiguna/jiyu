// Reference : https://www.w3schools.com/js/js_string_templates.asp

// ### Back-tics syntax ###
let redsox_fielders = `Devers, Hernandez, Bogaerts`;

// ### Quotes inside a string ###
let angels_sp = `They're Cobb, "Shotime", and Detmers`;

// ### Multiline strings ###
let mets_roster = `
Lindor,
Bayez,
DeGrom
`; 

// ### Template literals & Variable subtitution ###
let manager_firstname = "Gabe";
let manager_lastname = "Kepler";
let manager_fullname = `SF Giants' manager is ${manager_firstname} ${manager_lastname}`;

// ### Expression Subtitution ###
let total_team_wage = 200000000;
let luxury_tax = 0.35;
let payroll = `Team Payroll : ${price} + (${price} * ${luxury_tax})`;
