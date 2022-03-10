
var dayName =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayOfWeek = dayName[new Date().getDay()];
// let dayOfWeek = 'Thursday'  


if (dayOfWeek=== "Saturday"){
    console.log(dayOfWeek, "Happy Weekend");
}
else if (dayOfWeek=== "Sunday"){
    console.log(dayOfWeek, "lets Party");
}
else if (dayOfWeek=== "Monday"){
    console.log(dayOfWeek, "Office day");
}
else if (dayOfWeek=== "Tuesday"){
    console.log(dayOfWeek, "Office day");
}
else if (dayOfWeek=== "Wednesday"){
    console.log(dayOfWeek, "Office day");
}
else if (dayOfWeek=== "Thursday"){
    console.log(dayOfWeek, "Office day");
}
else if (dayOfWeek=== "Friday"){
    console.log(dayOfWeek,"Office day");
}



//if else-if and else
let fruit= "Mango"
if(fruit== "Mango"){
  console.log("Mango is Sweet.")
}else if (fruit== "Orange"){
    console.log("sour")
}else{
    console.log("I love fruits")
}
