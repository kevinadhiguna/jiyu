let i = 18548, j = 99999;
console.log("[BEFORE] i : ", i, " j :", j); // [BEFORE] i :  18548  j : 99999

[i, j] = [j, i];
console.log("[AFTER] i : ", i, " j :", j); // [AFTER] i :  99999  j : 18548
