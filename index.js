/**
 * TODO: Use a 'while' loop to log the numbers from 1 to 100.
 * However, only log the odd numbers.
 * HINT: Use an 'if' inside the while and use:
 * i % 2 === 1 to determine if its odd.
 */

let i = 0;

while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i += 1;
}

// Sum the numbers from 1 to 10.

x = 0;
sum = 0;

while (x <= 10) {
sum += x;
x += 1;
}

/**
 * Fizz Buzz
 * Log the numbers from 1 to 100.
 * However, if the number is divisible by 3, log 'Fizz!'
 * If the number is divisible by 5, log 'Buzz!'
 * If the number is divisible by 3 and 5, log 'FizzBuzz!'
 * Each number should only result in 1 log
 */

let y = 1;

while (y <= 100) {
  if (y % 3 === 0 && y % 5 === 0) {
    console.log("FizzBuzz!");
  } else if (y % 3 === 0) {
    console.log("Fizz!");
  } else if (y % 5 === 0) {
    console.log("Buzz!");
  } else {
    console.log (y);
  }
  y += 1;
}

/**
 * '!' is the NOT operator. It's a UNARY OPERATOR.
 * Using this in front of any data type (such as a number)
 * will immediately convert that data type into a Boolean.
 * Then, that value will be inverted as per the NOT operator.
 */

console.log(Boolean(0));
console.log(!0);
console.log(!111);
console.log(!"Hello");
console.log(!"");
console.log(!true);

// Simplified

let z = 1;

while (z <= 100) {
  if (!(z % 3) && !(z % 5)) {
    console.log("FizzBuzz!");
  } else if (!(z % 3)) {
    console.log("Fizz!");
  } else if (!(z % 5)) {
    console.log("Buzz!");
  } else {
    console.log (z);
  }
  z += 1;
}

