// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
const japan = {
  capitalCity: "Tokyo",
  famousFood: ["Sushi", "Sashimi", "Wasabi"],
  greeting: () => {
    return "Konnichiwa!";
  },
  primeMinisters: {
    2012: "Shinzo Abe",
    2020: "Suga Yoshihide",
    2021: "Fumio Kishida",
  },
};

console.log("japan.capitalCity : ", japan.capitalCity); // Tokyo
console.log("japan?.secondCity : ", japan?.secondCity); // undefined

console.log("japan.famousFood?.[1] : ", japan.famousFood?.[1]); // Sashimi
console.log("japan.famousFood?.[3] : ", japan.famousFood?.[3]); // undefined

console.log("japan.greeting() : ",japan.greeting()); // Konnichiwa!
console.log("japan.sayHi() : ", japan.sayHi?.()); // undefined

console.log("japan.primeMinisters?.[2022] : ", japan.primeMinisters?.[2022]); // undefined
console.log("japan.primeMinisters?.[2020] : ", japan.primeMinisters?.[2020]); // Suga Yoshihide
