let input = prompt("what you want to do?");
let todos = ["collect list", "go market", "Enjoy The day"];

while (input !== "quit" && input !== "q") {
  //here you cannot use || because you want to set quit and something else... so that why use &&.

  //other condition
  if (input === "list") {
    console.log("**************");
    //for loop
    for (let index = 0; index < todos.length; index++) {
      console.log(`${index}. ${todos[index]}`);
    }
    console.log("**************");
  } else if(input=== 'new'){
      const newTodo= prompt('okay, what new you want to do?')
      todos.push(newTodo);
      console.log(`${newTodo} added in todos list!`);
  }
  else if(input=== 'delete'){
    const index= parseInt(prompt('what new you want to delete?'));
    if(!Number.isNaN(index)){
let deleted= todos.splice(index, 1);
console.log(`Okay, Deleted ${deleted[0]}`);
    }else {
      console.log('uknown index');
    }
    
   
}
  input = prompt("what you want to do?");
}

console.log("Okay, You have Quit the game!");


//to add new list - new + "list Name"
//to delete list - delete + "List Number 1/2"
