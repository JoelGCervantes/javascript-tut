// WORKING WITH JSON 

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object.

/*
const jsonNames = `["Joel","Patrick","Spongebob","Squidward"]`;
const jsonPerson = `{"name": "Joel","age": 24,"employed": true,"hobbies": ["Soccer","Cooking","Coding"]}`;
const jsonPeople = `[{"name": "Joel","age": 24,"employed": true},{"name": "Spongebob","age": 30,"employed": true},{"name": "Patrick","age": 40,"employed": false}]`;

const parsedData = JSON.parse(jsonNames);
console.log(parsedData);
*/

// fetch returns a promise. 
fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value));

// iterate through each value
fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.age)))
    .catch(error => console.error(error));