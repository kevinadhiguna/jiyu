/**
 * [Question] What is ROT13 ?
 *
 * [Answer]
 * ROT13 is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet (Source: Wikipedia)
 */

function rot13(s) {
    return s
        .split("")
        .map((char) =>
            // console.log("char :", char);
            String.fromCharCode(
                char.charCodeAt(0) + (char.toLowerCase() < "n" ? 13 : -13)
            )
        )
        .join("");
}

// Take one of the most common password from https://nordpass.com/most-common-passwords-list/.
const password = "picture1";
console.log("Apply ROT13 to the password :", rot13(password));
