import { City, Person, Product, Employee } from "./dataTypes.js";

let products = [
    new Product("Running Shoes", 100), 
    new Product("Hat", 25)
];

type shapeType = { name: string };

class Collection<T extends shapeType> {
    private items: Set<T>;
    constructor(initialItems: T[]) {
        this.items = new Set<T>(initialItems);
    }
    
    add(...newItems: T[]): void {
        newItems.forEach(item => this.items.add(item));
    }

    get(name: string): T {
        return [...this.items.values()].find(item => item.name === name);
    }

    get count(): number {
        return this.items.size;
    }

    // values(): Iterator<T> {
    //     return this.items.values();
    // }

    // values(): IterableIterator<T> {
    //     return this.items.values();
    // }

    [Symbol.iterator](): Iterator<T> {
        return this.items.values();
    }
}

let productCollection: Collection<Product> = new Collection(products);

// let iterator: Iterator<Product> = productCollection.values();
// let result: IteratorResult<Product> = iterator.next();
// while (!result.done) {
//     console.log(`Product: ${result.value.name}, ${ result.value.price}`);
//     result = iterator.next();
// }

// let iterator: IterableIterator<Product> = productCollection.values();
// [...iterator].forEach(e => console.log(e));

[...productCollection].forEach(e => console.log(e))
