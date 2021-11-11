// Reference : https://www.w3schools.com/js/js_string_templates.asp

// ### Back-tics syntax ###
let redsox_fielders = `Devers, Hernandez, Bogaerts`;
console.log("Redsox fielders :", redsox_fielders, "\n");

// ### Quotes inside a string ###
let angels_sp = `They're Cobb, "Shotime", and Detmers`;
console.log("Angels starting pitchers :", angels_sp, "\n");

// ### Multiline strings ###
let mets_roster = `
Lindor,
Bayez,
DeGrom
`;
console.log("Mets roster :", mets_roster);

// ### Template literals & Variable subtitution ###
let manager_firstname = "Gabe";
let manager_lastname = "Kepler";
let manager_fullname = `SF Giants' manager is ${manager_firstname} ${manager_lastname}`;
console.log(manager_fullname, "\n");

// ### Expression Subtitution ###
let total_team_wage = 200000000;
let luxury_tax = 0.35;
let payroll =
    `Team Payroll : ${total_team_wage} + (${total_team_wage} * ${luxury_tax}) :` +
    "$" +
    (total_team_wage + total_team_wage * luxury_tax);
console.log(payroll);

// ### HTML templates ###
let header = "Template Literals";
let tags = ["mlb", "baseball", "sports"];

let html = `<h2>${header}</h2><ul>`;

for (x in tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;
