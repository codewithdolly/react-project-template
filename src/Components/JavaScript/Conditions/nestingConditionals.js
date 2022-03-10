let setPassword = prompt("Put your password");

//fix length of password charactor
if (setPassword.length > 6) {
  console.log("password is too long.");

  //password cannotcontain spaces
  if (setPassword.indexOf(" ") === -1) {
    console.log("Valid password.");
  } else {
    console.log("password cannot contain spaces");
  }
} else {
  console.log("Well Done! password has no spaces.");
}



// 2nd nesting solutions
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

if(num <= 100) {
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if(num % 2 === 0){
            console.log("YOU GOT ME!");
        }
    }
}
