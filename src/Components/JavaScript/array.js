//sorting with Alfabet

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const sortFruits = fruits.sort();

console.log(sortFruits);

let arr = [1, 2, 3, 4, 5, 6, 11, 22, 55, 333];

//short
let sortNumbers = arr.sort();

console.log(sortNumbers); //but this will not short exact if number is more than 9, we have to write function for that.

let sortNumbers2 = arr.sort((a, z) => {
  return a - z;
});

console.log(sortNumbers2);

function count(...args) {
  let total = 0;
  for (let acc of args) {
    total += acc;
  }

  return total;
}

let totalNum = count(1, 2, 3, 4, 5, 6, 11, 22, 55, 333);

console.log(totalNum);
