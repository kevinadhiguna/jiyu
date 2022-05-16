// Source :
// - https://levelup.gitconnected.com/the-ultimate-guide-to-get-started-with-node-js-4ce54579ceb7
// - https://nodejs.dev/learn/the-nodejs-os-module

const os = require("os");

// Return the string that identifies the underlying architecture, like arm, x64, arm64.
console.log("OS architecture : ", os.arch());

// Return the number of bytes that represent the free memory in the system.
console.log("Free memory in the system : ", os.freemem() / 1000000000, "GB");

// Return the path to the home directory of the current user.
console.log("OS home directory : ", os.homedir());

// Return the calculation made by the operating system on the load average.
console.log("Load average : ", os.loadavg());

// Return the platform that Node.js was compiled for:
console.log("Platform : ", os.platform());

// Returns a string that identifies the operating system release number
console.log("Release : ", os.release());

// Returns the path to the assigned temp folder.
console.log("OS temp directory : ", os.tmpdir());

// Returns the number of bytes that represent the total memory available in the system.
console.log("OS total memory : ", os.totalmem() / 1000000000, "GB");

// Return information on the CPUs available on your system.
console.log("Available CPUs on system : ", os.cpus());

// Return available network interfaces in the system
console.log("Available network interfaces : ", os.networkInterfaces());
