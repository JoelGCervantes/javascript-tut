// DICE ROLLER 

function rollDice() {
    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numDice; i++) {
        const val = Math.floor(Math.random() * 6) + 1;
        values.push(val);
        images.push(`<img src="images/${val}.png" alt="Dice ${val}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

}
