const countryElements = [
  "hasPeople",
  "ownsRegion",
  "hasGovernment",
  "isRecognizedByOtherNations",
];

function checkCountryProp(countryObj, countryElem) {
  // Check if 'countryObj' an object (https://stackoverflow.com/a/73933582)
  const isCountryObj_anObject =
    countryObj && typeof countryObj === "object" && !Array.isArray(countryObj);

  const isCountryElem_anArray = Array.isArray(countryElem);

  if (isCountryObj_anObject && isCountryElem_anArray) {
    for (const prop of Object.keys(countryObj)) {
      if (countryElem.includes(prop)) {
        return true;
      }
    }

    return false;
  } else {
    console.log(
      "Failed to check if an object has country props, please check passed arguments"
    );
  }
}

// An example test case
const USA = {
  name: "The United States of America",
  capitalCity: "Washington D.C.",
  nationalLanguage: "English",
  hasPeople: true,
  ownsRegion: true,
  hasGovernment: true,
  isRecognizedByOtherNations: true,
  currency: "USD",
};

const isUSAcountry = checkCountryProp(USA, countryElements);

console.log("Is USA a country? ", isUSAcountry);
