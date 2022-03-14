//1sr question. reverse odd numbers in this array.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let Output = [1, 8, 3, 6, 5, 4, 7, 2];

let evenNumberReversed = arr.filter((x) => x % 2 === 0).reverse(); //shorted evenNums

evenArrayIndex = 0;

function EvenNums() {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      arr[index] = evenNumberReversed[evenArrayIndex];
      evenArrayIndex++; //increment the index for next even number
    }
  }

  console.log(arr);
}

EvenNums();



//2nd question. In an array take alternative numbers and reverse them. Put it again in the place of array again

let array = [
  2, 1, 3, 4, 6, 5, 4, 7, 5, 6, 8, 2, 3, 6, 2, 6, 4, 4, 7, 3, 4, 5, 6,
];

let duplicateNum = array.reduce((num, index) => {
  if (num[index]) {
    num[index]++;
  } else {
    num[index] = 1;
  }
  return num;
}, {});

console.log(duplicateNum);

