// let num= [1,3,2,5,6];

// num.short();

// console.log(num);


let numbers = [1, 2, 4, 7, 3, 5, 6];

let results = [];
for (const number of numbers) {
  if (number % 2 != 0) {
    results.push(number);
  }
}

console.log(results);

let bigNum= numbers.filter((e)=> e>5 )


console.log(bigNum);