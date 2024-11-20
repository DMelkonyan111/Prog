class TodoItem {
    id;
    task;
    complete = false;
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
// Concise way of writing
export class ToDoItem {
    id;
    task;
    complete;
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        // Empty
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`);
    }
}
