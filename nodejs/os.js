// Source : 
// - https://levelup.gitconnected.com/the-ultimate-guide-to-get-started-with-node-js-4ce54579ceb7
// - https://nodejs.dev/learn/the-nodejs-os-module

const os = require("os");

// Return the string that identifies the underlying architecture, like arm, x64, arm64.
console.log("OS architecture : ", os.arch());

// Return information on the CPUs available on your system.
console.log("Available CPUs on system : ", os.cpus());

// Return the number of bytes that represent the free memory in the system.
console.log("Free memory in the system : ", os.freemem());