console.log("[1]");
console.log(" 1 + '2' : ",    1 + '2'  ); // 12
console.log(" '1' + '2' : ", '1' + '2' ); // 12

console.log("\n[2]");
console.log(" 5 - '3' : ", 5 - '3' ); // 2
// There is no '-' in string method. Thus, '3' will be converted to number.

console.log("\n[3]");
const arr = [];
console.log(" arr[1] : ", arr[1] ); // undefined
// Just like when declaring :
// let name;
// 'name' is undefined initially, not null or error!

console.log("\n[4]");
console.log(" 0 == false : " , 0 == false  ); // true
console.log(" 0 === false : ", 0 === false ); // false

console.log(" '' == false : " , '' == false  ); // true
console.log(" '' === false : ", '' === false ); // false

console.log(" null == false : ",  null == false  ); // false
console.log(" null === false : ", null === false ); // false

console.log(" undefined == false : ",  undefined == false  ); // false
console.log(" undefined === false : ", undefined === false ); // false

console.log(" NaN == false : ",  NaN == false  ); // false
console.log(" NaN === false : ", NaN === false ); // false

console.log(" false == false : ",  false == false  ); // true
console.log(" false === false : ", false === false ); // true

console.log(" [] == false : ",  [] == false  ); // true
console.log(" [] === false : ", [] === false ); // false
// When JS executes [] == false, first thing first, it will do [].toString() which converts [] to "" OR ''. Hence it is true.
// Steps :
// (1) [] == false
// (2) [].toString() == false
// (3) "" == false
// which generates 'true' at the end.

console.log(" {} == false : ",  {} == false  ); // false
console.log(" {} === false : ", {} === false ); // false
