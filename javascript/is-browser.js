// Check if current runtime is a browser or not
function isBrowser() {
  // A browser has these properties defined :
  // 1) window    => A window containing a DOM document; the document property points to the DOM document loaded in that window.
  // 2) document  => Any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree. 
  const browserProperties = [typeof window, typeof document];

  // If either is undefined, then it is not in a browser. Otherwise, it is.
  if (browserProperties.includes('undefined')) {
    return false;
  } else {
    return true;
  }

  // -- Shorthand --
  // return ![typeof window, typeof document].includes('undefined');
}

console.log('Is current runtime a browser? :', isBrowser()); // true (if Browser) OR false (if Node.js)

// Reference:
// - https://morioh.com/p/a76bc7d72226
