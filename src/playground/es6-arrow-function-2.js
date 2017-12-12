// const user = {
//   name: 'John',
//   cities: ['Philadelphia', 'New York', 'Dublin'],
//   printPlacesLived() {
//     return this.cities.map(city => `${this.name} as lived in ${city}`);
//   },
// };
// console.log(user.printPlacesLived());
//

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 5,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
  },
};

console.log(multiplier.multiply());
