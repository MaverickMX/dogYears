const myAge = 24;
//This is my actual age
let earlyYears = 2;
//The number of early years of a dog
earlyYears *= 10.5;
let laterYears = myAge - 2 ;
//The later years a dog have lived compared to my age
laterYears *= 4;
//The number of dog years accounted for my later years
const myAgeInDogYears = earlyYears + laterYears;
//The sum of early years and later years equals my age converted into dog years
const myName = 'Jonathan'.toLowerCase();
// The toLowerCase method return a string in lowercase letters
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
// A statement that logs to the console my age in dog years