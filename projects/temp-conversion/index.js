// Temp Conversion 

const textBox = document.getElementById("textBox");
const toFarh = document.getElementById("toFarh");
const toCelc = document.getElementById("toCelc");
const result = document.getElementById("result");
let temp;


function convert() {
    if (toFarh.checked) {
        temp = Number(textBox.value);

        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelc.checked) {
        temp = Number(textBox.value);

        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a unit";
    }
}