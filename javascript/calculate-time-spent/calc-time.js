const displayNumbers = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`i : ${i}`);
  }
};

const measureTimeSpent = () => {
  console.info("== Start ==\n");
  console.time("displayNumbers()");
  displayNumbers();
  console.timeEnd("displayNumbers()");
  console.info("\n== End ==")
};

measureTimeSpent();
// OUTPUT :
// == Start ==
// 
// i : 1
// i : 2
// i : 3
// i : 4
// i : 5
// i : 6
// i : 7
// i : 8
// i : 9
// i : 10
// displayNumbers(): 0.423ms
//
// == End ==
