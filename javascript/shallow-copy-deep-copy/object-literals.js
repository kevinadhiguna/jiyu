let obj = { date : "17/07/2022", count : 7 };

let obj2 = {...obj};
console.log(obj2);
// { date: '17/07/2022', count: 7 }

//let obj3 = [...obj]; // <- TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
//console.log(obj3);
