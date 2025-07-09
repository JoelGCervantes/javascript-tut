This file contains explanations of various methods that can be
used in javascript.




.map() = accepts a callback and applies that function to each element 
         of an array, then returns a new array. 

'''
//example 1:
const nums = [1,2,3,4,5];
const squares = nums.map(square);

console.log(squares);

function square(element){
    return Math.pow(element, 2);
}
'''

'''
//example 2:
const students = ['Spongebob', 'Patrick', 'Mr.Crabs'];
const studentsUpper = students.map(upperCase);

console.log(studentsUpper);

function upperCase(element){
    return element.toUpperCase();
}
'''

'''
//example3: takes an array of dates and formates them in U.S. MM/DD/YYY
const dates = ["2024-1-3", "2025-2-20", "2026-4-30"];
const formatted = dates.map(formatDates);

console.log(formatted);

fuction formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]/${parts[0]}}`
}
'''


.Filter() = creates a new array by filtering out elements

'''
//example1: takes an array of numbers are returns even/odd numbers inside it 
let nums = [1,2,3,4,5,6,7];
let evenNums = nums.filer(isEven);
let oddNums = nums.filter(isOdd);

console.log(evenNums);
console.log(isOdd);

fucntion isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2!== 0;
}

'''

.reduce() = reduce the elements of an array to a single value

'''
const prices = [5,40,10,25,15,20];
const total = prices.reduce(sum);

console.log`$${total.toFixed(2)}`);

function sum(previous, next){
    return previous + next;
}

'''

'''
const grades = [75, 50,90,80,65,95];

const max = grades.reduce(getmax);

console.log(max);

fucntion getMax(accumulator, element){
    return Math.max(accumulator, element);
}
'''


FUNCTON EXPRESSIONS

note: this is not "function declaration" which defines a reusable block of code that performs a specific task 

fucntion expressions = a way to define fucntions as values or variables.

'''
//example1
const hello = function(){
    console.log("hello");
}

hello(); //will execute the function previously defined

setTimeout(hello, 3000); //after 3000 seconds we will execute the hello function

setTimeout(function (){ //we can pass a function as a function parameter
    console.log("hello");
}, 3000);
'''

'''
//exmaple 2
const nums = [1,2,3,4,5,6];
const squares = nums.map(function (element){
    return Math.pow(element,2);
});
'''

'''
//example 3

const nums = [1,2,3,4,5,6];
const cubes = numbers.map(function(element){
    return Math.pow(element,3);
});

console.log(cubes);
'''

'''
//example 4
const numbers = [1,2,3,4,5,6,7,8];
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
'''

'''
//example 5
const nums = [1,2,3,4,5,6];
const total = nums.reduce(function(accumulator, element){
    return accumulator + element;
});
'''

summary: function expressions are a way to define functions as values or variables useful for:

         1. callbacks in asynchronous operations 
         2. High-order functions
         3. Event Listeners


ARROW FUNCTIONS 

arrow functions = concise way to write a function expressions. they are useful for simple functions that you use only once.
                  syntax: (parameters) => some code

'''
//example 1
const hello = (name, age) => {console.log(`Hello ${name}`)
                         console.log(`You are ${age} old`)}; // curly braces needed if the function will be more than one line of code.

hello("Joel", 24);
'''


'''
//example 2
setTimeout(() => console.log("hello"), 3000);

'''


'''
//example 3
const numbers = [1,2,3,4,5,6];

const square = numbers.map((element) => Math.pow(element, 2));

console.log(squares);
'''

'''
//example 4 
const numbers = [1,2,3,4,5,6];
const cubed = numbers.map((element) => {Math.pow(element, 3)});
'''

'''
const numbers = [1,2,3,4,5,6];
const evenNums = numbers.filter((element) => {element % 2 === 0}); // when function is one line of code a return statement isn't
                                                                   //necessary
'''

'''
const numbers = [1,2,3,4,5,6];
const reduced = numbers.reduce((accumulator, element) => accumulator + element);
'''

THIS
this = reference to the object where THIS is used (the object depends on the immediate context)
       person.name = this.name

       this keyword will not work with arrow functions

STATIC 
static = keyword that defines properties or methods that belong to a class itself rather than to the objects created from 
         that class. (class owns anything static, not the objects).

INHERITANCE
inheritance = allows a new class to inherit properties and methods 
              from an existing class (parent -> child)
              helps with code reusability. 

'''
//example 1
class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeoing`);
    }
}

class Rabbit extends Animal{
    name = "Rabbit"; // can be static

    run() {
        console.log(`this ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "Fish";
}

const rabbit = new Rabbit();
const fish = new Fish();

rabbit.alive = false;
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

fish.alive = true;
console.log(fish.alive);
fish.eat();
fish.sleep();
'''

SUPER KEYWORD 
super = keyword used in classes to call the constructor or access the properties and methods of a parent (superclass)
        this = this object 
        super = the parent


'''
//example 1
class Animal {
    constructor(name, age){ // parent constructor sets properties that are shared among child classes for code reusability
        this.name = name;
        this.age = age;
    }

    move(){
        console.log(`This ${this.name} moves at a speed of ${speed} mph`);
    }


}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age); // calls parent constructor 
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(swimSpeed); // calls parent move() function
    }

}

const fish = new fish("fish1", 1, 25);
fish.swim(); 

'''

SETTERS AND GETTERS
getter = special method that makes a property readable
setter = special property that makes a property writeable

used to validate and modify a value when raeading/wrting a property

'''
//example 1
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; // _width tells developers this is a private property that shouldn't be modified.
        }
        else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        iff(newHeight > 0){
            this._height = newHeight; // _width tells developers this is a private property that shouldn't be modified.
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return `${(this._height * this._width).toFixed(1)}cm^2`;
    }



}

// const rectangle = new Rectangle(-10000, "pizza"); // will execute the console error because setters will be invoked
const rectangle = new Rectangle(300, 400); // valid object created

//update height and width 
rectangle.width = 10;
rectangle.height = 13;

console.log(rectangle.width);
console.log(rectangle.height);
consle.log(rectangle.area);
'''


DESTRUCTURING
destructuring  = extract values from arrays and objects, then assign them to variables in a convinient way. 
                 [] = to perform array destructuring 
                 {} = to perform object destructuring 
                 5 examples 


example 1 
SWAP THE VALUE OF TWO VARIABLES
'''
let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);
'''

example 2
SWAP ELEMENTS IN AN ARRAY
'''
const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
'''

example 3
ASSIGN ELEMENTS TO VARIABLES
'''
const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
'''

example 4
EXTRACT VALUES FROM OBJECTS
'''
const person1 = {
    firstName = "spongeBob",
    lastName = "squarePants",
    age: 30, 
    job: "fry cook",
}

const person2 = {
    firstName = "Patrick",
    lastName = "Star",
    age: 35, 
}

const {firstName, lastName, age, job="unemployed"} = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
'''

example 5
DESTRUCTURE IN FUNCTION PARAMETERS
'''
function displayPerson({firstName, lastName, age, job="unemployed"}){
    console.log(`name: $(firstName) ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);

}

const person1 = {
    firstName = "spongeBob",
    lastName = "squarePants",
    age: 30, 
    job: "fry cook",
}

const person2 = {
    firstName = "Patrick",
    lastName = "Star",
    age: 35, 
}

displayPerson(person1);
'''



NESTED OBJECTS
nested objects = objects inside other objects. 
                 allows you to represent more complex data structures 
                 Child objects is enclosed by a Parent Object 

                 Person{Address{}, ContactInfo{}}
                 ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}



SORT METHOD 
sort() = method used to sort elements of an array in place. 
         Sorts elements as strings in lexicographic order, not alphabeetical order. 


DATE OBJECTS
date objects = objects that contain values that represent date and 
               times. These data objects can be changed and formatted. 

example 1 
'''
//Date(year,month, day, hour, minute, second,ms)
const date = new Date();
const newDate = Date(2025, 0, 1, 2, 3, 4, 5);
const strDate = new Date("2025-01-02T12:00:002");
cont timeSinceEpic = new Date(1.70000000000);

date.getFullYear(); // same type of methods exist for
                                    month, day, ect...

date.setFullYear(2025); // same type of methods exist for month, 
                           day, ect...

console.log(date);
console.log(newDate)
console.log(strDate);

//comparing dates 
const date1 = new Date("2023-12-31");
const date2 = new Date("2025-01-01");

if(date2 > date1){
    console.log("HAPPY NEW YEAR!");
}
'''



CLOSURE 
closure = A function defined inside of another function, the
          inner function has access to the variables and scope of the outer functiion. Allow for private variables and state maintenance used frequently in 25 frameworks: React, Vue, Angular

example 1
'''
function outer(){
    let message = "hello";

    function inner(){
        console.log(message);
    }

    inner();
}

message = "Goodbye"; // this will not update message inside of 
                        outer(). When using closure function variables are private. This line will create a new variable = to "Goodbye"

outer();
'''


example 2
'''
// a closure can maintain the state of a variable 

function increment(){
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}

increment(); // Calling this function will always console log 1. 
                without closure the count is reset everytime increment is called. 

//creating a counter using closure 
fuction createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increrment:increment, getCount} // returns an object with a 
                                               method of increment() shorthand version is {increment}
                                            
                                            // adding property to return a reference to the 
                                               getCount() property will allow our counter to have a method to get the current count. counter.getCount()
}

const counter = createCounter();

counter.increment(); // now when calling increment() the state of 
                        count is maintained, and updated correctly. 

                     // Very similar to creating a class. We use 
                        Classes to instantiate objects, but in this case we are using a function to return an object. 

counter.count = 0; // This will throw an error because count is private in createCounter() function.

'''

example 3
'''

function createGame{
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreasScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(); // .decreaseScore(); , .getScore();

console.log(game);
'''


SET TIMEOUT FUNCTION 
setTimeout() = function in JS that allows you to schedule the 
               execution of a function after an amount of time (milliseconds). Times are approximate (varies based on the workload of the JS runtime env.)

               setTimeout(callback, delay);

example 1
'''
function sayHello(){
    window.alert("hello");
}

setTimeout(sayHello, 3000);

//setTimeout() also works with anonymous functions
setTimeout(function(){window.alert("Hello")}, 3000);

//also works with arrow functions 
etTimeout(() => window.alert("Hello"), 3000);
'''

example 2
'''
// it is possible to use a clearTimeout() function to cancel a timeout before it triggers
// we must pass in a timeoutId

const timeoutId = setTimeout( => window.alert("Hello"), 3000);

clearTimeout(timeoutId);
'''

// setting and clearing timeout using an html button in website 
   folder.



ES6 MODULES 
es6 Module = An external file that contains reusable 
             code that can be imported into other JS files. Write reusable code for many different apps. Can contain variables, classes, functions ... and more. Introduced as part of ECMAScript 2015 uppdate.


DOM (DOCUMENT OBJECT MODULE)
DOM = object{} that represents the page you see in the web browser and provides you with 
      an API to interact with it. Web browser constructs the DOM when it loads
      an HTML document, and structures all the elements in a tree-like 
      representation. JS can access the DOM dynamically, change the content, 
      structure, and style of a web page

example 1
''''
const user = "Joel";
const WelcomeMsg = document.getElementbyId("Welcome-msg");

welcomeMsg.textContent += user === "" ? 'Guest' : user;
''''

ELEMENT SELECTORS 
element selectors = Methods used to target and manipulate HTML elements
                    They allow you to select one or multiple HTML elements 
                    from the DOM 

1. .getElementById() // element or NULL
2. .getElementClassName() // HTML COLLECTION
3. .getElementByTagName() // HTML COLLECTION
4. .querySelector() // ELEMENT OR NULL
5. .querySelectorAll() // NODELIST 

example 1
'''
// looping through a collection (collections are iterable)
const fruits = document.getElementByClassName("fruits");

for(let fruit of fruits){
fruit.style.backgroundColor = "yellow";
}
'''

Collections are limited in their functionality. For example, they have no 
forEach() method. 
We can typecast the collection into an array in order to access more funcitonality 


example 2
'''
const fruits = document.getElementByClassName("fruits");

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

'''


DOM NAVIGATION 
DOM navigation = The process of navigating through the structure of an HTML
                 document using Javascript. 

1. .firstElementChild
2. .lastElementChild
3. nextElementSibling
4. .previousElementSibling
5. .parentElement
6. .children 

example 1
'''
// .firstElementChild 
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.backgroundColor = "yellow";
'''

example 2
'''
// using querySelectorAll()
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => { // This will select every first child or all ul elements
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})
'''

EVENT LISTENERS 
eventListener = listen for specific events to create 
                interactive web pages 
                events: click, mouseover, mouseout, keydown, keyup, keypress (incompatible)
                .addEventListener(event, callback);