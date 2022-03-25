let  myDetails={
  name:"Dolly Singh",
  place:"HYD",
  No:"+91123456123",
  add:"BanjaraHills"
}


Object.keys(myDetails).forEach((key, value)=>{
  console.log(key,":" +myDetails[key]);
});

for (var key of Object.keys(p)) {
  console.log(key + " -> " + p[key])
}


let FullName="my name is dolly";
var reverseName= FullName.split(" ").reverse().join(" ")

console.log(reverseName);


function sum(...numbers) {
  return numbers.reduce((accumulator, current) => {
      return accumulator += current
  });

};

let totalNum=sum(1,2,3,4,5);

console.log(totalNum);



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


