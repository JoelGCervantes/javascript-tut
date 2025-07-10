
/*
CLASS LIST
classList = Element property in JS used to interact with an element's list of 
            of classes (CSS classes). Allows us to make reusable classes for 
            many elements across a webpage. 

1. add()
2. remove()
3. toggle(remove if present, Add if not)
4. replace(oldClass, newClass)
5. contains()
*/

const button = document.getElementById("my-button");
const H1 = document.getElementById("myH1");

//button.classList.add("enabled");
//button.classList.remove("enabled");

/*
button.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
})

button.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
})
*/

button.classList.add("enabled");
H1.classList.add("enabled");

button.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🦆";

    }
    else {
        event.target.classList.replace("enabled", "disabled");

    }
})

H1.addEventListener("click", event => {

    if (event.target.classList.contains("disabled")) {
        event.target.textContent += "🦆";

    }
    else {
        event.target.classList.replace("enabled", "disabled");

    }
})



/** buttons challenge round **/
let buttons = document.querySelectorAll(".buttons");

buttons.forEach(button => {
    button.classList.add("enabled");
})

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
})


buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
})

buttons.forEach(button => {
    button.addEventListener("click", event => {

        if (event.target.classList.contains("disabled")) {
            event.target.textContent += "🐻";
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }
    })
})