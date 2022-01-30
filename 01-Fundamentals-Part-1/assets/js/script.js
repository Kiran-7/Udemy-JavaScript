/*
console.log("Kiran");
console.log(7);

let firstName = "Kiran";
console.log(firstName);

*/

// Boolean data types examples

// let javascriptIsfun = true;
// console.log(javascriptIsfun);

// console.log(typeof javascriptIsfun);
// console.log(typeof 28);
// console.log(typeof "kiran");

/*
DYNAMIC TYPING 

For the first time, when we declare a new variable we use "let" keyword,
but when we want to change the value of the variable, we simply write it again 
but without using the "let" keyword.
*/

// javascriptIsfun = "Yes!";
// console.log(javascriptIsfun);
// console.log(typeof javascriptIsfun);

/* 
UNDEFINED DATA TYPE

Undefined is the value taken by a variable that 
is not yet defined. basically that means its an empty value. 
*/

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// type of null should retun null or undefined, instead it returns object. WHY????

/* 
Basic Operatiors in JS

An Operators basically allows us to transform values or combine values. 
*/

// Math operators

const now = 2050;
const ageJohn = now - 1993;
const ageBob = now - 2040;
console.log(ageJohn, ageBob);
console.log(ageJohn * 2, ageBob / 2, 2 ** 3);

const firstName = "Kiran";
const lastName = "Ramesh";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 99
console.log(x);

// Comparison Operators (>, < , >= , <=)

console.log(ageJohn > ageBob);
console.log(ageBob >= 18);

const isFullage = ageBob >= 18;

console.log(now - 1993 > now - 2040);

// Operator Precedence

/* Here we understand how (now - 1993) is executed 1st and how (now - 2040) is executed 2nd 
and later the answers are checked with comparision operator??

Check out - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

console.log(25 - 10 - 5); //left to right precedence.

let a, b;
a = b = 25 - 10 - 5; // a = b = 10
console.log(a, b);

// Grouping Precedence (Paranthisis)

const avgrageAge = (ageJohn + ageBob) / 2;
console.log(ageJohn, ageBob, avgrageAge);

// String and Template Literals

const fname = "Kiran";
const job = "coder";
const birthYear = 2020;
const crtYear = 2050;

const state =
  "I'm " + fname + ", a " + (crtYear - birthYear) + " year old " + job + "!";
console.log(state);

const newTemp = `I'm ${fname}, a ${crtYear - birthYear} year old ${job}!`;
console.log(newTemp);

// if-else statements

// example 1
const age = 15;
if (age >= 18) {
  console.log("You can start driving 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`You are not old enough. wait for another ${yearsLeft} years`);
}

// example 2
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Type conversion and Coercion

// Type conversion - Manually changing the type of value. Values can be changed to 3 types : Number, String and Boolean.
const inputYear = "2022";
console.log(Number(inputYear));
console.log(Number(inputYear) + 20);

console.log(Number("ABCD"));
console.log(typeof NaN);

console.log(String(7), 7);

// Type Coercion - Javascript changes the value type behined the scene.

console.log("I am " + 30 + " years old"); // The + operator converts numbers to string. Concatination.
console.log("23" - "10" - 3); // here, the strings are converted to numbers bucz of - operator.
console.log("23" * "2"); //same as above.
console.log("10" / "2");

let n = "1" + 1; // string 1 and number 1 concats and outputs 11.
n = n - 1; // here n is assigned value 11, but as - operator is used, 11 in string format is considered as number 11. so it outputs value  11 -1 = 10.
console.log(n); // Output = 10.

console.log(2 + 3 + 4 + "5");
console.log("10" - "4" - "3" - 2 + "5");

/* Truthy and falsy values

falsy values are not excatly false but will become false when we try toconvert them into boolean.

In JS, there are only 5 falsy values : 
0, " ", undefined, null, NaN. (And false value which isn't added as its false by default).

Everything else are truthy values, so values that will be converted to true.
so any number that is not zero or any string that is not an empty string will be converted to true
when we attempt to convert them to a boolean.
*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("abcd"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("Work more");
}

let height = 5;
if (height) {
  console.log("Height is defined");
} else {
  console.log("Height is not defined");
}

// Equality Operators:  == vs ===

const correctAge = 18;
if (correctAge === 18)
  console.log("Your correct age is 18. (Strict equality operator)");

if (correctAge == 18)
  console.log("Your correct age is 18. (loose equality operator)");

// === Strict equality operator - This does not perform type Coercion
// == loose equality operator - This performs type Coercion

// Always use strict equality operator and try as much as you can tp avoid loose equality operator as it can give hard to find bugs in the code.

const numb = Number("Enter the number");
console.log(numb);
console.log(typeof numb);

if (numb === 10) {
  // "10" == 10
  console.log("Number 10 is cool");
} else if (numb === 7) {
  // else if condition
  console.log("Number 7 is cool");
} else {
  console.log("Number entered is not in List");
}

if (numb !== 10) console.log("why not 10???");

// !== strict operator (different operator)
// != loose operator

// Basic Boolean logical Operators (AND, OR and NOT Operators)

const hasDL = true; // A
const hasGoodVision = true; // B

console.log(hasDL && hasGoodVision);
console.log(hasDL || hasGoodVision);
console.log(!hasDL);

// if (hasDL && hasGoodVision) {
//   console.log("You are able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDL && hasGoodVision && isTired);

if (hasDL && hasGoodVision && !isTired) {
  console.log("You are able to drive!");
} else {
  console.log("Someone else should drive...");
}

// Switch Statements - Its basically used to compare one value to multiple different options.

const day = "wednesday";

switch (day) {
  case "monday":
    console.log("New Week Started");
    console.log("1st day of the week");
    break;

  case "tuesday":
    console.log("2nd day of the week");
    break;

  case "wednesday":
  case "thursday":
    console.log("Middle of the week");
    break;

  case "friday":
    console.log("5th day of the week");
    break;

  case "saturday":
  case "sunday":
    console.log("Weekends");
    break;

  default:
    console.log("Not a valid Day!!!");
    break;
}

//  Above same code to be executed using logical operators and if/else statements

if (day === "monday") {
  console.log("New Week Started");
  console.log("1st day of the week");
} else if (day === "tuesday") {
  console.log("2nd day of the week");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Middle of the week");
} else if (day === "friday") {
  console.log("5th day of the week");
} else if (day === "saturday" || day === "sunday") {
  console.log("Weekends");
} else {
  console.log("Not a valid Day!!!");
}

// Statements and Expressions.

if (23 > 10) {
  const str = "23 is larger number";
}

// The Conditional operator or Ternart Operator

// const ageDrive = 20;
// ageDrive >= 18 // condition
// ? console.log("I like to drive") // if condition (if condition is true, this statement is executed)
// : console.log("I don't have DL"); // else condition (if condition is false, this statement is executed)

const drink = age >= 18 ? "wine" : "Water";
console.log(drink);
