var todos = ["Buy new turtle"];
window.setTimeout(function () {
    var input = prompt("what would you like to do");

    while (input !== "quit") {
        //handle input
        if (input === "list") {
            listTodos();
        } else if (input === "new") {
            addTodos();
        } else if (input === "delete") {
          deleteTodos();
        }

        //ask again for new input
        input = prompt("what would you like to do");
    }
    console.log("ok, you quit the app");

    function listTodos() {
        console.log("*****");
        todos.forEach(function (todo, i) {
            console.log(i + ": " + todo);
        });
        console.log("*****");
    }

    function addTodos() {
        //ask for new todo
        var newTodo = prompt("enter new todo");
        //add to todos array
        todos.push(newTodo);
        console.log("added todo");
    }

    function deleteTodos(){
          //ask for index of todo to be deleted
          var index = prompt("enter index of todo to delete");
          //delete that todo
          //splice
          todos.splice(index, 1);
          console.log("deleted todo");
    }





}, 500)

// var input = prompt("what would you like to do");

// while (input !== "quit") {
//     if (input === "list") {
//         console.log(todos);
//     } else if (input === "new") {
//         var newTodo = prompt("enter new todo");
//         todos.push(newTodo);
//     }
//     input = prompt("what would you like to do");
// }
// console.log("ok, you quit the app");