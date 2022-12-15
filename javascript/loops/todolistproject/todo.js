let command = "";
let todolist = []
let entry = ""
while (true) {
    command = prompt("please enter a command:new, list, delete or quit");
    if (command == "quit") {
        break;
    }
    else if (command == "new") {
        entry = prompt("please enter the new todo")
        todolist.push(entry)
        console.log(`entered new todo: ${entry}`)
    }
    else if (command == "delete") {
        entry = parseInt(prompt("please enter the index of the todo you want to delete"))
        while (!entry) {
            entry = parseInt(prompt("this wasnt a number please enter a number"))
        }
        console.log(`deleting todo: ${todolist[entry]}`)
        todolist.splice(entry, 1)

    }
    else if (command == "list") {
        console.log("************")
        for (i = 0; i < todolist.length; i++) {
            console.log(`${i}: ${todolist[i]}`)
        }
        console.log("************")
    }
}