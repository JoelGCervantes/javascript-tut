/*
    .checked = property that determines the checked state of an 
               HTML property checbox or radio button element.
*/

const myCheckBox = document.getElementById(`myCheckBox`);
const visaBtn = document.getElementById(`visaBtn`);
const mastercardBtn = document.getElementById(`mastercardBtn`);
const paypalBtn = document.getElementById(`paypalBtn`);
const mySubmit = document.getElementById(`mySubmit`);

mySubmit.onclick = function () {

    if (myCheckBox.checked) { //if box is checked
        subResult.textContent = `You are subbed`;
    } else {
        subResult.textContent = `You are NOT subbed`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `Visa payment`;
    }
    else if (mastercardBtn.checked) {
        paymentResult.textContent = `Mastercard payment`;
    }
    else if (paypalBtn.checked) {
        paymentResult.textContent = `Paypal payment`;
    }
    else {
        paymentResult.textContent = `Must select a payment type`;
    }
}