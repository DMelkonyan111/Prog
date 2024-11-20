import { ToDoItem } from "./toDoItem.js";
export class ToDoCollection {
    userName;
    toDoItems;
    nextId = 1;
    itemMap = new Map();
    constructor(userName, toDoItems = []) {
        this.userName = userName;
        this.toDoItems = toDoItems;
        toDoItems.forEach(item => this.itemMap.set(item.id, item));
    }
    addToDo(task) {
        while (this.getToDoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new ToDoItem(this.nextId, task));
        return this.nextId;
    }
    getToDoById(id) {
        return this.itemMap.get(id);
    }
    getToDoItems(includeComplete) {
        return [...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }
    markComplete(id, complete) {
        const toDoItem = this.getToDoById(id);
        if (toDoItem) {
            toDoItem.complete = complete;
        }
    }
    removeComplete() {
        this.itemMap.forEach(item => {
            if (item.complete) {
                this.itemMap.delete(item.id);
            }
        });
    }
    getItemCounts() {
        return {
            total: this.itemMap.size,
            incomplete: this.getToDoItems(false).length
        };
    }
}
