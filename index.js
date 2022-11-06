
// Declaring a variable
// let name = 'Matt';
// console.log(name);

// Naming Rules

// 1 Cannot be a reserved keyword like let
// 2 Should be meaningful
// 3 Cannot start with a number (1name)
// 4 Cannot contain a space ot hyphen (-)
// 5 Are case-sensitive


// Best practice is if you dont need to reassign the variable then use const
// if not use let
// const interestRest = 0.3;
// interestRest = 0.5;
// console.log('interestRate')

// let name = 'Matt'; // String Literal
// let age = 20; // Number Literal 
// let isApproved = false; // Boolean Literal
// let firstName = undefined; // By default if a varible is not intialized then its undefined but you can explict assign it so, this is uncommon
// let selectedColor = null; // Want to clear the value of a variable

// Making an object
// let person = {
//     name:'Matt',
//     age: '20'
// };

// Dot Notation
// person.name = 'Matthew';

// Bracket Notation
// let selection = 'name';
// person[selection] = 'Matt';

// console.log(person);

// Arrays
// An array is an object in JavaScript
// let selectedColors = ['red','blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);

// Making a function
function greet(name){
    console.log('Hello ' + name);
}


function square(number){
    return number * number;
}

// Calling a function
// Matthew is an agruement
// An agruement is the actual value were supplying
// A parameter is what we have at the time of the declaration
greet('Matthew');

console.log(square(2));
