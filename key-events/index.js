
const box = document.getElementById("box");
const moveamt = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {

        event.preventDefault();
        box.textContent = "🙉";
        box.style.backgroundColor = "orange";

        switch (event.key) {
            case "ArrowUp":
                y -= moveamt;
                break;
            case "ArrowDown":
                y += moveamt;
                break;
            case "ArrowLeft":
                x -= moveamt;
                break;
            case "ArrowRight":
                x += moveamt;
                break;
        }

        box.style.top = `${y}px`;
        box.style.left = `${x}px`;

    }
});



document.addEventListener("keyup", event => {
    box.textContent = "🐵";
    box.style.backgroundColor = "aquamarine";
});