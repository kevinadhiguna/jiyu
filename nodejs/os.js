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

// Returns an object that contains the current username, uid, gid, shell, and homedir
console.log("OS user info : ", os.userInfo());

// Return the calculation made by the operating system on the load average.
console.log("Load average : ", os.loadavg());

// Return the platform that Node.js was compiled for:
console.log("Platform : ", os.platform());

// Identifies the operating system
console.log("OS type : ", os.type());

// Returns a string that identifies the operating system release number
console.log("Release : ", os.release());

// Returns the path to the assigned temp folder.
console.log("OS temp directory : ", os.tmpdir());

// Returns the number of bytes that represent the total memory available in the system.
console.log("OS total memory : ", os.totalmem() / 1000000000, "GB");

// Returns the number of seconds the computer has been running since it was last rebooted.
console.log("OS uptime : ", os.uptime() * 0.0166667, "minute(s)");

// Return information on the CPUs available on your system.
console.log("Available CPUs on system : ", os.cpus());

// Return available network interfaces in the system
console.log("Available network interfaces : ", os.networkInterfaces());
