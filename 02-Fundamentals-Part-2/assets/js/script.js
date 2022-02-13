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

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// 1st Way of writing an array. this way of writing an array is called  LITERAL SYNTAX.
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// 2nd Way of writing an array
// const years = new Array (1947, 1950, 1975, 2022);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Jai";
// console.log(friends);

//  Array can hold multiple data types in a single variable

// const firstName = "Ronith";
// const Ronnie = [firstName, "Aryan",  2050-1990,  friends];
// console.log(Ronnie);

// Array Exercise

// const calcAge = function(birthYear){
//     return 2050 - birthYear;
// }

// const year = [1990, 1965, 2002, 2015, 2022 ]
//  console.log(calcAge(years));
// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[year.length - 1])];
// console.log(ages);

// Array Methods

// Array push
// Array push method adds the new element at the end of the array.
// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// // Array unshift
// // Array unshift method adds the new element at the begining of the array.

// friends.unshift("Chester");
// console.log(friends);

// // Remove elements 

// // Array Pop method - This removes the last element from the array.

// friends.pop(); //Last element is removed.
// console.log(friends);
// const popped = friends.pop(); 
// console.log(popped);
// console.log(friends);

// // Array shift method - This removes the first element from the array.
// friends.shift();
// console.log(friends);

// // Array indexOf method - to get the index value of an array element
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("bob")); // If we try to get the index value of an element which is not available in the array, then we get the output as -1.

// /* ES6 Array includes methods - gives boolean values if the element is available in the array.
//     This methods also uses strict equality for this check
// */

// console.log(friends.includes("Steven"));
// console.log(friends.includes("bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("bob"));
// console.log(friends.includes("23")); // False - Due to strict equality check, typeOf 23 is not matching.
// console.log(friends.includes(23)); // True - due to typeOf is matching.

//  With includes method we can write conditionals

// if (friends.includes("Steven")) {
//     console.log("You have a friend called Steven");
// }

// Introduction to Objects

const person = {
    firstName:"Kiran",
    lastName:"Ramesh",
    age:2022-1993,
    job:"coder",
    friends:["mike","bob", "jay"]
}

// how to retrive data from objects using both Dot & bracket notations
// console.log(person);
// console.log(person.firstName); // dot notation
// console.log(person['lastName']); // bracket notation

// const nameKey = "Name";
// console.log(person["first" + nameKey]);
// console.log(person["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Person? Choose between firstname, lastname, age, job, friends");

// if (person[interestedIn]){
//     console.log(person[interestedIn]);
// } else {
//     console.log("Wrong request...!!");
// }

// Add new property to an object

// person.location = "India";
// person["gmail"] = "kiranr.hv@gmail.com";
// console.log(person);

// Challenge 

// Person has 3 friends, and his bestfriend is called Mike.

console.log(`${person.firstName} has ${person.friends.length} friends, and his best friend is ${person.friends[0]}`);