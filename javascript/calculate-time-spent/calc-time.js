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
