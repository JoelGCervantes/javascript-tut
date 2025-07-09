const button = document.getElementById("my-button");
const img = document.getElementById("myImg");

button.addEventListener("click", event => {

    if (img.style.visibility === "hidden") {
        img.style.visibility = "visible";
        button.textContent = "hide";
    }
    else {
        img.style.visibility = "hidden";
        button.textContent = "show";
    }
});
