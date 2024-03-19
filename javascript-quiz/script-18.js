const fcbarcelona = {
    country: 'spain',
}

const realmadrid = {
    foundedIn: 1902,
    spain: true,
}

console.log("realmadrid[fcbarcelona] : ", realmadrid[fcbarcelona]); // undefined

console.log(
    "realmadrid[fcbarcelona.country] : ", realmadrid[fcbarcelona.country]
); // true

console.log(
    "realmadrid[fcbarcelona['country']] :", realmadrid[fcbarcelona["country"]]
); // true

console.log("realmadrid.fcbarcelona : ", realmadrid.fcbarcelona); // undefined

console.log(
    "realmadrid.fcbarcelona.country : ", realmadrid.fcbarcelona.country
); // TypeError: Cannot read properties of undefined (reading 'country')
