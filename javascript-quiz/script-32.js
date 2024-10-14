const buffer = new Uint8Array(10);
buffer[10] = 10;

console.log("buffer[10] :", buffer[10]); // Undefined

// While JavaScript itself doesn't have traditional buffer overflows like C/C++, you can still encounter similar issues, when using low-level languages that have access to native modules
