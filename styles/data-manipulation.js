// Part 2 Practical Math

//Trip Variables
const totalMiles = 1500;

let mpg;
let mph = 75;

if (mph >= 75) {
  mpg = 23;
} else if (mph >= 60) {
  mpg = 28;
} else {
  mpg = 30;
}

const budget = 175;

const pricePerGallon = 3;

// How many gallons of fuel will you need for the entire trip?
const gallonsNeeded = totalMiles / mpg;

console.log(gallonsNeeded);

// Will your budget be enough to cover the fuel expense?
const willBudgetCover = budget > gallonsNeeded * pricePerGallon;

console.log(
  'Price of total gas needed: ',
  gallonsNeeded * pricePerGallon,
  'dollars'
);
console.log('does budget cover gas expense? ', willBudgetCover);

// How long will the trip take, in hours?
const tripHours = totalMiles / mph;

console.log('how long will this take?? ' + tripHours.toFixed() + ' hours');

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?

// mph - 55
// 50 gallons needed
// Price of total gas needed:  150 dollars
// does budget cover gas expense?  true
// how long will this take?? 27.27 hours

// mph - 60
// 53.57142857142857 gallons needed
// Price of total gas needed:  160.71428571428572 dollars
// does budget cover gas expense?  true
// how long will this take?? 25 hours

// mph - 75
// 65.21739130434783 gallons needed
// Price of total gas needed:  195.6521739130435 dollars
// does budget cover gas expense?  false
// how long will this take?? 20 hours