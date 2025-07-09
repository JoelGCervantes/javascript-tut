
// an event listener (.addEventListener(event, *)) * can be 
// a callback function, anonymous function, or an arrow function
const box = document.getElementById("box");
const button = document.getElementById("my-button");


button.addEventListener("click", function (event) {
    box.style.backgroundColor = "tomato";
    box.textContent = "ouch!";
});

button.addEventListener("mouseover", event => {
    box.style.backgroundColor = "yellow";
    box.textContent = "don't!";
})

button.addEventListener("mouseout", event => {
    box.style.backgroundColor = "blanchedalmond";
    box.textContent = "click me";
})