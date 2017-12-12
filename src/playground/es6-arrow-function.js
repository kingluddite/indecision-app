// function square(x) {
//   return x * x;
// }
//
// const squareArrow = x => {
//   return x * x;
// };

// const squareArrow = x => x * x;
//
// console.log(square(8));
// console.log(squareArrow(15));

// Challenge
// getFirstName('john doe') ---> 'John'
// create regular function using verbose syntax
// create second function using expression syntax
// log to screen firstName

const getFirstName = fullName => {
  return fullName.split(' ')[0];
};

console.log(getFirstName('Jane Wayne'));

const getLastName = fullName => fullName.split(' ')[1];

console.log(getLastName('Jane Wayne'));
