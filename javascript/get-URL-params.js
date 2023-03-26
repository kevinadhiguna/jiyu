function getURLparameters(url) {
  let parameters = (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => (
    (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
  ), {});

  return parameters;
}

const url1 = 'https://youtube.com';
const url2 = 'http://mywebsite.com/page?firstname=John&lastname=Doe';

console.log(`URL parameters in "${url1}" :`, getURLparameters(url1));
console.log(`URL parameters in "${url2}" :`, getURLparameters(url2));

// Reference: https://www.30secondsofcode.org/js/s/get-url-parameters/
