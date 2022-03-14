let array= [1,,2,3,4,5,3]

let finddoublevalue= array.filter((item, index )=> {
  return array.indexOf(item) !==index;
 
})

console.log(finddoublevalue)


let arr= [1, 2, 3, 4, 5]

let totalNum= arr.reduce((acc, curr)=>{
  return acc +=curr
})

console.log(totalNum);

