let arr = [9, 17, 23, 37];

const doubled = arr.map(x => { return x * 2 });
console.log("doubled values of", arr, ":", doubled); // doubled values of [ 9, 17, 23, 37 ] : [ 18, 34, 46, 74 ]

const powered = arr.map(x => { return x * x });
console.log("powered values of", arr, ":", powered); // powered values of [ 9, 17, 23, 37 ] : [ 81, 289, 529, 1369 ]

arr.map((element, index, array) => {
  console.log("index :", index);
  console.log("element :", element);
  console.log("array :", array);
  return element;
});
// index : 0
// element : 9
// array : [ 9, 17, 23, 37 ]
// index : 1
// element : 17
// array : [ 9, 17, 23, 37 ]
// index : 2
// element : 23
// array : [ 9, 17, 23, 37 ]
// index : 3
// element : 37
// array : [ 9, 17, 23, 37 ]
