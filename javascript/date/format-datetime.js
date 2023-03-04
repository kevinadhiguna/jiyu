// Example date
const date = {
  minimumDate: "2019-12-31T17:00:00.000Z",
  maximumDate: "2023-02-28T17:00:00.000Z",
  dateString: "12/15/2017 12:00:00 AM",
}

// Locales (learn more: https://www.ibm.com/docs/en/datacap/9.1.8?topic=support-supported-language-codes)
const usDateFormat = "en-US";
const japanDateFormat = "ja-JP";
const spainDateFormat = "es-ES";

// Convert date format
const formattedMinimumDate = new Intl.DateTimeFormat(usDateFormat, {
  year: "numeric",  month: "numeric", day: "numeric"
}).format(new Date(date.minimumDate)); // 1/1/2020

console.log("formattedMinimumDate :", formattedMinimumDate);

const formattedMaximumDate = new Intl.DateTimeFormat(japanDateFormat, {
  year: "numeric",  month: "numeric", day: "numeric"
}).format(new Date(date.maximumDate)); // 2023/3/1

console.log("formattedMaximumDate :", formattedMaximumDate);

const formattedDateString = new Intl.DateTimeFormat(spainDateFormat, {
  year: "numeric",  month: "numeric", day: "numeric"
}).format(new Date(date.dateString)); // 15/12/2017

console.log("formattedDateString :", formattedDateString);

// Important Note:
// - Without "new Date()" in "new Intl.DateTimeFormat(<LOCALE>, { ... }).format(<DATE>)", it would result "RangeError: Invalid time value"

// Reference:
// - https://stackoverflow.com/a/73054686
