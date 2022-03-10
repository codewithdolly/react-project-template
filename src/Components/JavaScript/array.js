//sorting with Alfabet

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const sortFruits = fruits.sort();

console.log(sortFruits);

let arr = [1, 2, 3, 4, 5, 6, 11, 22, 55, 333];

//short
let sortNumbers = arr.sort();

console.log(sortNumbers); //but this will not short exact if number is more than 9, we have to write function for that.

//short method
let sortNumbers2 = arr.sort((a, z) => {
  return a - z;
});

console.log(sortNumbers2);

let items = [
  { item: "Mango", price: 80 },
  { item: "Book", price: 50 },
  { item: "banana", price: 20 },
  { item: "Computer", price: 8000 },
  { item: "mouse", price: 100 },
  { item: "Phone", price: 500 },
  { item: "food", price: 10 },
  { item: "home", price: 10000 },
];


//filter method
let shortItems = items.filter((item) => {
  return item.price > 100;
});
console.log(shortItems);

//foreatch method
Object.keys(shortItems).forEach((key) => {
  console.log(key);
});


for (let item of Object.keys(shortItems)) {
  console.log(shortItems[item]);
}


//map

let ItemsPrice= items.map((item)=>{
  return  item.price;
})

console.log(ItemsPrice);