function getItems() {
  return [10, 20];
}

let items = getItems();
let thirdItem = items[2] == undefined ? 0 : items[2];

console.log(thirdItem); // 0

//2
let locked = 1;
let canChange = locked != 1 ? true : false;

console.log(canChange);

//3
let authenticated = true;
let nextURL = authenticated
  ? ( "/admin")
  : ("/403");


  console.log(nextURL);
