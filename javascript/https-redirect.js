function httpsRedirect() {
  if (window.location.protocol !== 'https:') {
    window.location.replace('https://' + window.location.href.split('//')[1]);
  }
}

httpsRedirect();

// Reference: https://dev.to/swastikyadav/9-useful-code-snippets-for-everyday-javascript-development-part-1-478a
