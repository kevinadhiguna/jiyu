// === Number ===
console.info("=== Number ===");
var oneNumber = 1;
console.log("Number :", oneNumber);
// === Array ===
console.info("\n=== Array ===");
var numberList = [1, 2, 3];
console.log("numberList :", numberList);
// alternative to 'numberList'
var numberList2 = [1, 2, 3];
console.log("numberList2 :", numberList2);
// === Enum ===
console.info("\n=== Enum ===");
var PrimaryColors;
(function (PrimaryColors) {
    PrimaryColors[PrimaryColors["Red"] = 0] = "Red";
    PrimaryColors[PrimaryColors["Yellow"] = 1] = "Yellow";
    PrimaryColors[PrimaryColors["Blue"] = 2] = "Blue";
})(PrimaryColors || (PrimaryColors = {}));
// Access enum values
var myFavoriteColor = PrimaryColors.Yellow;
console.log("My Favorite Color :", myFavoriteColor);
// === Void ===
console.info("\n=== Void ===");
var hello = function () {
    console.log("Hello World !");
};
hello();
