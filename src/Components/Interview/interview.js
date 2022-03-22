obj1 = { a: 10 };
const obj2 = obj1;
obj2.a = 20;
console.log(obj1);
console.log(obj2);
let obj1; //obj one has not inishilized yet so it will show err "cannot inishilize before declaration."



for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
} // it will print 3 times 3.

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}// it will print after previous loop. and it will print 0,1,2




