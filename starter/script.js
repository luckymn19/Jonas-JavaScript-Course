/*****************************
 Variables and data types
*****************************/
/*
var firstName = 'Brendan';
console.log(firstName);

var lastName = 'Lindsay';
var age = 27;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'analyst';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'Jon and Mark';
var if = 23;
*/
/*****************************
 Variable mutation and type coercion
*****************************/
/*
var firstName = 'Brendan';
var age = 28;

//Type coercion
console.log(firstName, age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' +  isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' +  isMarried);
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/
/*****************************
 Basic operators
*****************************/
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/
/*****************************
 Operator precedence
*****************************/
/*
var now = 2018;
var yearJohn = 1989;
var yearMark = 1983;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = now - yearMark;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
*/

/*****************************
 CODING CHALLENGE 1
*****************************/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).




1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true").

GOOD LUCK 😀
*/
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn =  92; // kg
var heightJohn = 1.95; // meters

var BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

var isHigher = BMIMark > BMIJohn;

console.log("Is Mark's BMI higher than John's?" + ' ' + isHigher);
