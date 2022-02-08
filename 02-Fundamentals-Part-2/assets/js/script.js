'use strict';

// Activating Strict mode

// let hasDriversLicense = false;
// const passTest = true; 

// if (passTest) hasDriversLicense = true;  // Change the variable name to understand that the mistake is shown only on strict mode.
// if (hasDriversLicense) console.log("I can Drive");

// const interface = "Audio";  Unexpected strict mode reserved word. So JS is reserving interface word for the feature that it might impliment in future.

// const private = 007; this will also not work here

// const if = 25; cannot name bcuz if is reserved for if statement

// ------------------------------------------------------------------------------
/* Functions - Fundamental building block of real world JS applications are functions.

So Function is a simply a piece of code that we can re-use over and over again in our code.
A variable holds value, but a function can hold one or more complete line of code.
*/

// function logger(){
//     console.log("My name is Kiran");
// }

// logger();  // this process here is basically using the function is called invoking or running or calling the functions

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ----------------------------FUNCTION DECLARATIONS vs FUNCTION EXPRESSIONS--------------------------------------------------

// ----------FUNCTION DECLARATIONS-------------

// function calcAge1(birthYear){
//     return 2040 - birthYear;
// }

// const age1 = calcAge1(1993);
// console.log(age1);

// Function declarations can be called, before the codes is defined.

// ----------FUNCTION EXPRESSIONS-------------

// const calcAge2 = function(birthYear){
//     return 2040 - birthYear;
// }
// const age2 = calcAge2(1993);
// console.log(age1, age2);

// Function expressions cannot be called before the codes is defined.

// ----------------------------ARROW FUNCTION--------------------------------------------------

// Arrow function is a special form of function expression, that is shorter & faster to write.

// const calcAge3 = birthYear => 2040 - birthYear;

// const age3 = calcAge3(1993);
// console.log(age3);

// const yearsUntillRetirement = (birthYear, firstName) => {
//     const age = 2040 - birthYear;
//     const retirement = 60 - age;
//     // return retirement
//     return (`${firstName} is retires in ${retirement} years.`);
// }

// console.log(yearsUntillRetirement(1993, "Kiran"));
// console.log(yearsUntillRetirement(2005, "Aryan"));
// console.log(yearsUntillRetirement(2020, "John"));


// ---------------- Functions Calling Other Functions ----------------

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2,4));


// ---------------- Reviewing Functions ----------------

// const calcAge = function(birthYear){
//     return 2022 - birthYear;
// }

// const yearsUntillRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 60 - age;

//     if (retirement >= 0) {
//         return retirement;
//     } else {
//         return -1;
//     }    
//     // return (`${firstName} is retires in ${retirement} years.`);
// }

// console.log(yearsUntillRetirement(1993 , "Kiran"));
// console.log(yearsUntillRetirement(1950 , "Kiran"));


// ---------------- Arrays ----------------

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// 1st Way of writing an array. this way of writing an array is called  LITERAL SYNTAX.
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// 2nd Way of writing an array
const years = new Array (1947, 1950, 1975, 2022);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Jai";
console.log(friends);

//  Array can hold multiple data types in a single variable

const firstName = "Ronith";
const Ronnie = [firstName, "Aryan",  2050-1990,  friends];
console.log(Ronnie);

// Array Exercise

const calcAge = function(birthYear){
    return 2050 - birthYear;
}

const year = [1990, 1965, 2002, 2015, 2022 ];