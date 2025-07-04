
function genPassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowecaseChars = "abcdefghijklmonpqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowecaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (passLen <= 0) {
        return `(password length must be atleast 1)`;
    }
    if (allowedChars.length == 0) {
        return `(atleast 1 set of characters must be selected)`;
    }

    for (let i = 0; i < passLen; i++) {
        const randIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randIndex];
    }


    return '';
}
const passLen = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = genPassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
