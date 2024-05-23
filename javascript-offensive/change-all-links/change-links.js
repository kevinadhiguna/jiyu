// Note: meant to be used in a <script></script> tag

const links = document.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
    links[i].href = "https://youtube.com";
    links[i].innerHTML = "The link has been modified..."    
}
