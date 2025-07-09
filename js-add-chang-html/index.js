// adding and chaning HTML using JS 

// EXAMPLE 1 

// 1. create the element 
const newLi = document.createElement("li");

// 2. add atributes/properties 
newLi.textContent = "coco";
newLi.id = "newLi";
newLi.style.fontWeight = "bold";
newLi.style.backgroundColor = "red";

// 3. append element to the DOM
//document.getElementById("fruits").append(newLi);
//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("orange").append(newLi);
//document.getElementById("box3").prepend(newH1);

/*
const apple = document.getElementById("apple");
document.getElementById("fruits").insertBefore(newLi, apple);
*/

//with no ids 
const fruits = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newLi, fruits[2]);

/*
how to insert an element sandwiched between box 1 and box 2
const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2);
*/

/*
// In the case there are no ids on boxes
const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]); // (newElement, currentElement)
*/

// remove element
//document.getElementById("box3").removeChild(newH1); // select the parent of the element and use removeChild
