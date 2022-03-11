let person= [1,2,3,4,5];
let result= false;

for(let index=0; index<=person.length; index++){
    if(person[index]>3){
        result = True;
        break;
    }
}

console.log(person, result);
