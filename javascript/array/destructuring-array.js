function goals() {
  return [9, 11, 17];
}

let [a, b, c, d, e] = goals();
console.log("a :", a); // 9
console.log("b :", b); // 11
console.log("c :", c); // 17
console.log("d :", d); // undefined
console.log("e :", e); // undefined

function assists() {
  return [2, 10, 14, 16];
}

let [i, j, ...l] = assists();
console.log("i :", i); // 2
console.log("j :", j); // 10
console.log("...l :", ...l); // [14, 16]

function takeOns() {
  return [45, 21, [2, 12]];
}

let [noel, lavi, [blake, julien]] = takeOns();
console.log("noel :", noel); // 45
console.log("lavi :", lavi); // 21
console.log("blake :", blake); // 2
console.log("julien :", julien); // 12

// -----

let x, y = [43, 23];
console.log("x :", x); // undefined
console.log("y :", y); // [43, 23]

let [m, n] = [10, 11];
console.log("m :", m); // 10
console.log("n :", n); // 11
