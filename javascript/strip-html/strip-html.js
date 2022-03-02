// DOMParser does not exist in NodeJS, that's a browser thing (For more : https://stackoverflow.com/questions/11398419/trying-to-use-the-domparser-with-node-js). 
const stripHtml = (html) => {
    const result = new DOMParser().parseFromString(html, "text/html");
    return result.body.textContent;
}

console.log(stripHtml("<h2>JavaScript is <b>awesome</b> !</h2>")); // Output : JavaScript is awesome !
