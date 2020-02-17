const x = 3;
const name = "Diana";

// TODO: Check if x is ODD AND if it's less than 10.
if (x % 2 === 1 && x < 10) {
  console.log("x is odd because it has a remainder of 1.");
}

// TODO: Check if x is ODD OR if it's less than 10.
if (x % 2 === 1 || x < 10) {
  console.log("x is odd because it has a remainder of 1.");
}

// PRIMITIVES are compared by VALUE.
// Result is TRUE.
console.log(49 === 49);

// OBJECTS are compared by REFERENCE.
// Result is FALSE.
const y = {
  name: "Diana"
};

const z = {
  name: "Diana"
};

console.log(y === z);

console.log({ a: 42 } === { a: 42 });

// PASS by VALUE.
// Result is 3.
let a = 3;

let b = a;

console.log(b);

// PRIMITIVES CANNOT MUTATE.
// '3' that was used with 'a' previously is completely thrown out and replaced with '4'.
// Result is 3 - a is changed, but b is not.

a = 4;

console.log(b);

// PASS by REFERENCE.
// Result is Walsh - object that is referenced is changed.
const c = {
  name: "Diana"
};

const d = c;

c.name = "Walsh";

console.log(d.name);


// TODO: Log the numbers from 1 to 10
let x = 1;

while (x < 10) {
  // Always make sure that there is an exit condition.
  x += 1;
  console.log(x);
}
