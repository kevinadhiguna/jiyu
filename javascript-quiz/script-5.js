let a = 11;

(function () {
    console.log("a :", a); // ReferenceError: Cannot access 'a' before initialization 
    let a = 9;
})();
