// (Node.js docs) To check for support for a non-English locale (i.e. full-icu or system-icu), Intl.DateTimeFormat can be a good distinguishing factor:
function hasFullICU() {
  try {
    const january = new Date(9e8);
    const spanish = new Intl.DateTimeFormat("es", { month: "long" });

    // Check if the month in spanish format equals to enero
    return spanish.format(january) === "enero";
  } catch (error) {
    console.log("Does not fully support ICU");
    return false;
  }
}

console.log("hasFullICU :", hasFullICU);

// Reference: https://nodejs.org/dist/latest-v18.x/docs/api/intl.html
