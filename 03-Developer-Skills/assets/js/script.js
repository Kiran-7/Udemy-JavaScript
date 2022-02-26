// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
    Problem 1: We work for a company building a smart home thermometer, 
    Our most recent task is this: "Given an array of temperatures of one day,
     calculate the temperature amplitude. Keep in mind that sometimes there might
     be a sensor error."
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/*
 1. Understanding the problem
    - what is temp amplitude? (Ans: Difference bwteen the highest & lowest temp in the array).
    - how to compute max and min temp?
    - what's a sensor error? and what to do?

 2. Breaking up into sub-problems
    - how to ignore errors?
    - find max value in temp array.
    - find min value in temp array.
    - subtract min from max (amplitude) and return it.
*/

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const currentTemp = temp[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/* Problem 2: Function should now receive 2 arrays of temp

 1. Understanding the problem
    - with 2 arrays, should we implement functionality twice? (NO)

 2. Breaking up into sub-problems
    - Merge 2 arrays
*/

const calcTempAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const currentTemp = temp[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 2, 6], [14, 78, 23]);
console.log(amplitudeNew);
