// ----------------- Assignment no.1 -----------------

/* 
LECTURE: Values and Variables

    1. Declare variables called 'country', 'continent' and 'population' and
    assign their values according to your own country (population in millions)
    2. Log their values to the console 
*/

let country = "India";
let continent = "Asia";
let population = 14;

console.log(country);
console.log(continent);
console.log(population);

// ----------------- Assignment no.2 -----------------

/*
LECTURE: Data Types

    1. Declare a variable called 'isIsland' and set its value according to your
    country. The variable should hold a Boolean value. Also declare a variable
    'language', but don't assign it any value yet
    2. Log the types of 'isIsland', 'population', 'country' and 'language'
    to the console.
*/

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// ----------------- Assignment no.3 -----------------

/* 
LECTURE: let, const and var

    1. Set the value of 'language' to the language spoken where you live (some
    countries have multiple languages, but just choose one)
    2. Think about which variables should be const variables (which values will never
    change, and which might change?). Then, change these variables to const.
    3. Try to change one of the changed variables now, and observe what happens
*/

language = "English";
// const birthYear;
const birthYear = 1993;

// language = "English";
// birthYear = 1992;

console.log(language);
console.log(birthYear);

// ----------------- Assignment no.4 -----------------

/*
LECTURE: Basic Operators

    1. If your country split in half, and each half would contain half the population,
    then how many people would live in each half?
    2. Increase the population of your country by 1 and log the result to the console
    3. Finland has a population of 60 crores. Does your country have more people than
    Finland?
    4. The average population of a country is 33 crores people. Does your country
    have less people than the average country?
    5. Based on the variables you created, create a new variable 'description'
    which contains a string with this format: 'Portugal is in Europe, and its population is 
    11 million people speak portuguese'.
*/

console.log(population / 2);
population++;
console.log(population);
console.log(population > 60);
console.log(population < 33);
const description =
  country +
  " is in " +
  continent +
  ", and its population is " +
  population +
  " crores." +
  " People in Karnataka speak " +
  language;
console.log(description);

// ----------------- Assignment no.5 -----------------

/*
LECTURE: Strings and Template Literals

    1. Recreate the 'description' variable from the last assignment, this time
    using the template literal syntax
*/

const despt = `${country} is in ${continent}, and its population is ${population} crores. People in Karnataka speak ${language} language.`;
console.log(despt);

// ----------------- Assignment no.6 -----------------

/*
    LECTURE: Taking Decisions: if / else Statements
    1. If your country's population is greater that 100 crores, log a string like this to the
    console: 'Portugal's population is above average'. Otherwise, log a string like
    'Portugal's population is 80 crores below average'.

    2. After checking the result, change the population temporarily to 13 and then to
    130. See the different results, and set the population back to original.
*/

if (population > 100) {
  console.log("India's population is above average");
} else {
  console.log("India's population is below average");
}

// ----------------- Assignment no.7 -----------------

/*
    LECTURE: Type Conversion and Coercion

    1. Predict the result of these 5 operations without executing them:
        '9' - '5';
        '19' - '13' + '17';
        '19' - '13' + 17;
        '123' < 57;
        5 + 6 + '4' + 9 - 4 - 2;

    2. Execute the operations to check if you were right
*/

console.log("9" - "5"); //4
console.log("19" - "13" + "17"); // 617.
console.log("19" - "13" + 17); //23.
console.log("123" < 57); // false.
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// ----------------- Assignment no.8 -----------------

/* LECTURE: Equality Operators: == vs. ===

    1. Declare a variable 'numNeighbours' based on a prompt input like this:
    prompt('How many neighbour countries does your country
    have?');
    2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
    == for now)
    3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
    is greater than 1
    4. Use an else block to log 'No borders' (this block will be executed when
    'numNeighbours' is 0 or any other value)
    5. Test the code with different values of 'numNeighbours', including 1 and 0.
    6. Change == to ===, and test the code again, with the same values of
    'numNeighbours'. Notice what happens when there is exactly 1 border! Why
    is this happening?
    7. Finally, convert 'numNeighbours' to a number, and watch what happens now
    when you input 1
    8. Reflect on why we should use the === operator and type conversion in this
    situation
*/

// const numNeighbours = prompt(
//   "How many neighbouring countries does your country have?"
// );

// if (Number(numNeighbours) === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// ----------------- Assignment no.9 -----------------

/* LECTURE: Logical Operators

    1. Comment out the previous code so the prompt doesn't get in the way.
    2. Let's say Sarah is looking for a new country to live in. She wants to live in a
    country that speaks english, has less than 50 million people and is not an
    island.
    3. Write an if statement to help Sarah figure out if your country is right for her.
    You will need to write a condition that accounts for all of Sarah's criteria. Take
    your time with this, and check part of the solution if necessary.
    4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
    not, log 'Portugal does not meet your criteria :('
    5. Probably your country does not meet all the criteria. So go back and temporarily
    change some variables in order to make the condition true (unless you live in
    Canada :D) 
*/

// A = country speaks English
// B = population < 50
// c = Not an island.

if (language === "English" && population < 50 && !isIsland) {
  console.log("You should live in India :)");
} else {
  console.log("India does not meet your criteria :(");
}

// ----------------- Assignment no.10 -----------------

/* LECTURE: The switch Statement
    1. Use a switch statement to log the following string for the given 'language':
    chinese or mandarin: 'MOST number of native speakers!'
    spanish: '2nd place in number of native speakers'
    english: '3rd place'
    hindi: 'Number 4'
    arabic: '5th most spoken language'
    for all other simply log 'Great language too :D'
*/

const nativelanguage = "hindi";

switch (nativelanguage) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;

  case "spanish":
    console.log("2nd place in number of native speakers");
    break;

  case "english":
    console.log("3rd place");
    break;

  case "hindi":
    console.log("Number 4");
    break;

  case "arabic":
    console.log("5th most spoken language");
    break;

  default:
    console.log("Great language too :D");
    break;
}

// ----------------- Assignment no.11 -----------------

/* LECTURE: The Conditional (Ternary) Operator
    1. If your country's population is greater than 33 million, use the ternary operator
    to log a string like this to the console: 'Portugal's population is above average'.
    Otherwise, simply log 'Portugal's population is below average'. Notice how only
    one word changes between these two sentences!

    2. After checking the result, change the population temporarily to 13 and then to
    130. See the different results, and set the population back to original
*/

// Ternary Operator
population > 33
  ? console.log("population is above average")
  : console.log("population is below average");

// Ternary Operator inside a template literal
console.log(
  `${country}'s population is ${population > 33 ? "Above" : "Below"} average`
);
