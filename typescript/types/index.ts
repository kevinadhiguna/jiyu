// === Number ===
console.info("=== Number ===");
let oneNumber: number = 1;
console.log("Number :", oneNumber);

// === Array ===
console.info("\n=== Array ===");
let numberList: number[] = [1, 2, 3];
console.log("numberList :", numberList);

// alternative to 'numberList'
let numberList2: Array<number> = [1, 2, 3];
console.log("numberList2 :", numberList2);

// === Enum ===
console.info("\n=== Enum ===");
enum PrimaryColors {
  "Red",
  "Yellow",
  "Blue",
}
// Access enum values
let myFavoriteColor: PrimaryColors = PrimaryColors.Yellow;
console.log("My Favorite Color :", myFavoriteColor);

// === Void ===
console.info("\n=== Void ===");
const hello = (): void => {
  console.log("Hello World !");
};
hello();
