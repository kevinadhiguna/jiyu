const CryptoJS = require("crypto-js");

const word = "SuperSecretPassword";

const encryptMD5 = (text) => {
  try {
    return CryptoJS.MD5(text).toString();
  } catch (errorEncryptingMD5) {
    console.error("Oops.. something went wrong, make sure the text exist.");
  }
}

const md5Result = encryptMD5(word);
console.log(`${word} has been encrypted to MD5 : ${md5Result}`);
