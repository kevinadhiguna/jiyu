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
const password = "qwerty"; // <- Known issue : currently password can only contain alphabet, not numbers...
console.log("Let's apply ROT13 to this password :", password, "\n");

const encryptedPassword = rot13(password);
console.log("Apply ROT13 to the password :", encryptedPassword);

const decryptedPassword = rot13(encryptedPassword);
console.log("Decrypt from ROT13 :", decryptedPassword);
