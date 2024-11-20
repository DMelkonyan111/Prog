"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_js_1 = require("./dataTypes.js");
let products = [
    new dataTypes_js_1.Product("Running Shoes", 100),
    new dataTypes_js_1.Product("Hat", 25)
];
class Collection {
    items;
    constructor(initialItems) {
        this.items = new Set(initialItems);
    }
    add(...newItems) {
        newItems.forEach(item => this.items.add(item));
    }
    get(name) {
        return [...this.items.values()].find(item => item.name === name);
    }
    get count() {
        return this.items.size;
    }
    // values(): Iterator<T> {
    //     return this.items.values();
    // }
    // values(): IterableIterator<T> {
    //     return this.items.values();
    // }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
let productCollection = new Collection(products);
// let iterator: Iterator<Product> = productCollection.values();
// let result: IteratorResult<Product> = iterator.next();
// while (!result.done) {
//     console.log(`Product: ${result.value.name}, ${ result.value.price}`);
//     result = iterator.next();
// }
// let iterator: IterableIterator<Product> = productCollection.values();
// [...iterator].forEach(e => console.log(e));
[...productCollection].forEach(e => console.log(e));
