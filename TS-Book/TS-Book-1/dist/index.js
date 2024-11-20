import { ToDoItem } from "./toDoItem.js";
import { ToDoCollection } from "./toDoCollection.js";
import inquirer from "inquirer";
let toDos = [
    new ToDoItem(1, "Buy flowers"),
    new ToDoItem(2, "Get shoes"),
    new ToDoItem(3, "Collect tickets"),
    new ToDoItem(4, "Call Joe", true),
];
let collection = new ToDoCollection("Adam", toDos);
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List ` + `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getToDoItems(true).forEach(item => item.printDetails());
}
var Commands;
(function (Commands) {
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers["command"] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
