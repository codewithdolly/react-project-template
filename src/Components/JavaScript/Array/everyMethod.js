let person= [1,2,3,4,5];
let results= true;

for(let index=0; index<=person.length; index++){
    if(person[index]<0){
        results = false;
        break;
    }
}

console.log(person, results);



//other method
let numbers = [1, 3, 5];

let result = numbers.every(function (e) {
    return e > 0;
});

console.log(result);
