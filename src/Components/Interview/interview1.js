// let  myDetails={
//   name:"Dolly Singh",
//   place:"HYD",
//   No:"+91123456123",
//   add:"BanjaraHills"
// }

// Object.keys(myDetails).forEach((key, value)=>{
//   console.log(key,":" +myDetails[key]);
// });

// for (var key of Object.keys(p)) {
//   console.log(key + " -> " + p[key])
// }


// let FullName="my name is dolly";
// var reverseName= FullName.split(" ").reverse().join(" ")

// console.log(reverseName);


function sum(...numbers) {
  return numbers.reduce((accumulator, current) => {
      return accumulator += current
  });

};

let totalNum=sum(1,2,3,4,5);

console.log(totalNum);


console.log("start");


function hello(){
  console.log("hello");
};

setTimeout(() => {
  hello()
}, 10000);

console.log("Ewnd!!");

