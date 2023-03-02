function findSameElementsInTwoArrays(arr1, arr2) {
  const set = new Set(arr2);
  return arr1.filter(element => set.has(element));
}

const a = [10, 11, 25];
const b = [21, 25, 31];
const c = [5001, 2003, 7282];
const d = [2003, 5001, -9];

console.log(`Same element(s) in [${a}] & [${b}] :`, findSameElementsInTwoArrays(a, b));
console.log(`Same element(s) in [${c}] & [${d}] :`, findSameElementsInTwoArrays(c, d));

// Reference:
// - https://morioh.com/p/a76bc7d72226
