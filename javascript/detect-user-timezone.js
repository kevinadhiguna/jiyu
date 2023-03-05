// Appliable on both browser and Node.js
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

console.log('Your timezone :', timezone); // Europe/London (<- just an example)
