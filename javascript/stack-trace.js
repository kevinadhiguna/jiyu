const function2 = () => console.trace();
const function1 = () => function2();

function1();
