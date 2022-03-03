function isUrlValid(url) {
  // URL Regex source : https://urlregex.com/
  const urlRegex =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
  return urlRegex.test(url) ? "valid" : "invalid";
}

const links = [
  "https://mywebsite.com",
  "https://mywebsite.com/login",
  "https://mywebsite.com/login#privacy",
  "https://admin.mywebsite.com",
  "https://admin.mywebsite.com/dashboard",
  "https://admin.mywebsite.com/dashboard#terms",
];

for (let i = 0; i < links.length; i++) {
  console.log(
    `[case ${i + 1}]`,
    links[i],
    "is a",
    isUrlValid(links[i]),
    "URL.."
  );
}
// OUTPUT
// [case 1] https://mywebsite.com is a valid URL..
// [case 2] https://mywebsite.com/login is a valid URL..
// [case 3] https://mywebsite.com/login#privacy is a valid URL..
// [case 4] https://admin.mywebsite.com is a valid URL..
// [case 5] https://admin.mywebsite.com/dashboard is a valid URL..
// [case 6] https://admin.mywebsite.com/dashboard#terms is a valid URL..
