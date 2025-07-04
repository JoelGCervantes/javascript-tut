//console.log(`Hello`)
//console.log(`PIZZA`)

//window.alert(`This is an Alert`)
//window.alert(`Gay`)

// comment 

/* mulit line commment
*/
/*
document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = `Gay`;
*/

// Variable = container that stores a value. 
//            Behaves as if it were the value it contains

//let age = 25;
//let price = 10.99;
//let gpa = 3.2;
//let firstname = "Joel";

//console.log(`you are ${age} years old`);
//console.log(`pice = $${price}`)
//console.log(typeof firstname)
//console.log(firstname)


//booleans
//let online = false;

//console.log(typeof online);
/*
let fullName = "Joel Garcia-Cervantes";
let age = 25;
let student = true;

document.getElementById(`p1`).textContent = `Your name is: ${fullName}`;
document.getElementById(`p2`).textContent = `Your age is: ${age}`;
document.getElementById(`p3`).textContent = `Is a student: ${student}`;
*/

/*
    operator precedence
    1. paranthesis ()
    2. exponents
    3. multiplication & division modulo
    4. addition & subtraction
*/

// Accepting user input

// 1. EASY WAY = window prompt 
// 2. PROFESSIONAL WAY = HTML textbox

/* EASY WAY
let username;

username = window.prompt(`name? `);

console.log(username);
*/
/* PROFESSIONAL WAY
let username;
document.getElementById(`submit`).onclick = function () {
    username = document.getElementById(`myText`).value;
    document.getElementById(`myH1`).textContent = `Welcome ${username}`;
}
*/


// type conversion = change the datatype of a value to another 
// strings, numbers, booleans 
/*
let age = window.prompt(`How old are you?`);

age = Number(age);
age += 1;

console.log(age, typeof age);
*/


// const = a variable that can't be changed 
/*
const PI = 3.14159;
let radius;
let circumference;




document.getElementById(`submit`).onclick = function () {

    radius = document.getElementById(`myText`).value;
    radius = Number(radius);

    circumference = 2 * PI * radius;
    document.getElementById(`myH3`).textContent = circumference + "cm";
}
*/

// Math = built-in object that provides a collection of properties and methods

/*
let x = 3.99
let y = 2;
let z;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);

console.log(z);
*/

// RANDOM NUMBER GENERATOR

/*RANDOM NUMBER BETWEEN A GIVEN RANGE
const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);
*/

// TERNARY OPERATOR

/*
let age = 21;
let msg = age >= 18 ? "You are 18+" : "you are not 18+";

let time = 16;
let greeting = time < 12 ? "Good Morning" : "Good Afternoon";

let isStudent = true;
let msg = isStudent ? "You are" : "you're not";
*/


// STRING METHODS 
/*
let usrname = "cococream";

usrname.charAt(0);

console.log(usrname.indexOf('o'));

usrname.lastIndexOf('r');

usrname.length;

usrname = usrname.trim() // trims white space

const email = 'email@email.com';

let usrname = email.slice(0, email.indexOf('@'));
let extension = email.slice(email.indexOf('@') + 1);
*/

//METHOD CHAINING = calling one method after another in one line of code 
/*
let usrname = window.prompt('Enter username: ');

// ---- No method chaining ----

usrname = usrname.trim();
let letter = usrname.charAt(0);
letter = letter.toLocaleUpperCase();

let extrachar = usrname.slice(1);
extrachar = extrachar.toLocaleLowerCase();

usrname = letter + extrachar;
console.log(usrname);

// ---- METHOD CHAINING ----

usrname = usrname.trim().charAt(0).toLocaleUpperCase() + usrname.trim().slice(1).toLocaleLowerCase();
*/



/* distinctions in operators in javascript */
/*
    = assignment operator
    == comparison operator (compare if values are equal)
    === strict equality operator (compare if values & datatype are equal)
    != inequality operator
    !== strict inequality operator

const PI = 3.14

if (PI == "3.14") {
    console.log('PI'); // data types aaren't checked if condition is true
} else {
    console.log('not PI');
}

if (PI === '3.14') {
    console.log('PI');
} else {
    console.log('Not PI'); // Datatypes are checked if condition is false
}
*/




/* Functions in javascript */
/*
function happyB(usrname, age) {
    console.log("Happy birthday!");
    console.log("Happy birthday!");
    console.log(`Happy birthday to you! ${usrname}`);
    console.log("Happy birthday!");
    console.log("Happy birthday!");
    console.log(`You are ${age} years old`);
}

happyB('Joel', '24');
*/
/*
function add(x, y) {
    let result = x + y;
    return result;
}

let z = add(2, 3);
console.log(z);
*/



/* spread operator */
// ... = Allows an iterable such as an array 
//       or string to be expanded into seperate elements 
//       (unpaacks elements)
/*
let nums = [1, 2, 3, 4, 5];
let max = Math.max(...nums);

console.log(max);

// string example

let usr = "Joel";
let letters = [...usr].join('-');

console.log(letters);


let fruits = ["apple", "orange", "bannanaA"];
let veggies = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...veggies, "eggs", "milk"];

console.log(newFruits);
*/


/*** rest parameters ***/
// parameter prefixed with three dots. Allow a function to work with a variable
// number of arguments by bundling them into an array. 

// spread = expands an array into seperate elements 
// rest = bundles seperate elements into an array.
/*
function openFridge(...foods) {
    console.log(...foods);
}
function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "food2";
const food3 = "food3";
const food4 = "food4";

openFridge(food1, food2, food3, food4, "food5");
const foods = getFood(food1, food2, food3, food4);

console.log(foods);


function sum(...nums) {
    let result = 0;
    for (let num of nums) {
        result += num;
    }
    return result
}

const total = sum(1, 2, 3, 4, 5, 6, 8);
console.log(`Your total is ${total}`);
// string example
const fullName = combineString("Joel", "Garcia", "-", "Cervantes");

function combineString(...fullName) {
    return fullName.join(" ");
}
*/

/*** CALLBACK IN JAVASCRIPT ***/
// callback = function that is passed as an argument to another function 

//             used to handle asynchronous operations:
//             1. Reading a file
//             2. Network requests 
//             3. Interating with databases

/*
hello(goodbye);

function hello(callback) {
    console.log("Hello!");
    callback();
}

function goodbye() {
    console.log("goodbye");
}
*/

/*
sum(displayPage, 2, 3);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}
*/


/*** ForEach ***/
// forEach() = method used to iterate over the elements of an array and apply a specified function (callback)
// To each element

// array.forEach(callback)
// forEach() automatically provides the current element, the index, and array 
/*
let nums = [1, 2, 3, 4, 5];

nums.forEach(double);
nums.forEach(display);


function triple(element, index, array) {
    array[index] = element * 3;
}

function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}
*/

let timeoutId;
function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("stated");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("cleared");
}
