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
    const deleteTodo= prompt('what new you want to delete?')
    todos.pop(deleteTodo);
    console.log(`${deleteTodo}  deleted.`);
}
  input = prompt("what you want to do?");
}

console.log("Okay, You have Quit the game!");
