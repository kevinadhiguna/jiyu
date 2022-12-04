const realMadrid = {
  country: "Spain",
  ucl: 12,
  attackers: ["Vinicius jr.", "Benzema", "Rodrygo"],
};

const { country, ucl } = realMadrid;
const { 0: Vinicius, 1: Benzema, 2: Rodrygo } = realMadrid.attackers;

console.log('realMadrid.country : ', realMadrid.country);
console.log('realMadrid.attackers : ', realMadrid.attackers);
