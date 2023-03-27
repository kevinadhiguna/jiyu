function getEmail() {
  let email1 = 'sincere@march.biz';
  let email2 = 'lucio@melissa.me';

  // return multiple values as an array
  return [email1, email2];
}

let [email1, email2] = getEmail();
console.log('[email1, email2] :', [email1, email2]);

// reference: https://www.javascripttutorial.net/javascript-return-multiple-values/
