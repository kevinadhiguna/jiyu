function getEmail() {
  let email1 = 'sincere@march.biz';
  let email2 = 'lucio@melissa.me';

  // return multiple values as an array
  return [email1, email2];
}

let [email1, email2] = getEmail();
console.log('[ email1, email2 ] :', [ email1, email2 ]);

function getAirplanes() {
  let airplane1 = 'Emirates';
  let airplane2 = 'All Nippon Airlanes';

  return { airplane1, airplane2 };
}

let { airplane1, airplane2 } = getAirplanes();
console.log('{ airplane1, airplane2 } :', { airplane1, airplane2 });

// reference: https://www.javascripttutorial.net/javascript-return-multiple-values/
