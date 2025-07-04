const min = 1;
const max = 100;
const answ = Math.floor(Math.random() * (max - min) + 1);

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`guess number between ${min} - ${max}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Enter a valid number");
    }
    else if (guess < min || guess > max) {
        window.alert("Enter a valid number");
    }
    else {
        attempts++;
        if (guess < answ) {
            window.alert("too low");
        }
        else if (guess > answ) {
            window.alert("too high");
        }
        else {
            window.alert(`CORRECT! Anwser was ${answ}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}