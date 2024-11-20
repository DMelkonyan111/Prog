import { Person, Product, City, Employee } from "./dataTypes.js";

let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")
];

let products = [
    new Product("Running Shoes", 100), 
    new Product("Hat", 25)
];

let cities = [
    new City("London", 8136000), 
    new City("Paris", 2141000)
];

let employees = [
    new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")
];

class DataCollection1<T extends { name: string }> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): T {
        return this.items[index];
    }
}

// let peopleData = new DataCollection1<Person>(people);
// console.log(`People names: ${peopleData.getNames().join(", ")}`);
// let firstPerson = peopleData.getItem(0);
// console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);

// let productData = new DataCollection1<Product>(products);
// console.log(`Product names: ${peopleData.getNames().join(", ")}`);
// let firstProduct = productData.getItem(0);
// console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);

// let cityData = new DataCollection1<City>(cities);
// console.log(`City names: ${cityData.getNames().join(", ")}`);





// class DataCollection2 <T extends { name: string }, U> {
//     private items: T[] = [];

//     constructor (initialItems: T[]) {
//         this.items.push(...initialItems);
//     }

//     collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
//         let results = [];

//         this.items.forEach(item => {
//             let match = targetData.find(d => d[targetProp] === item[itemProp]);

//             if (match !== undefined) {
//                 results.push({...match, ...item});
//             }
//         })

//         return results;
//     }
// }

// let peopleData = new DataCollection2<Person, City>(people);
// let collatedData = peopleData.collate(cities, "city", "name");

// collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));




class DataCollection3 <T extends { name: string }> {
    protected items: T[] = [];

    constructor (initialItems: T[]) {
        this.items.push(...initialItems);
    }

    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        let results = [];

        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);

            if (match !== undefined) {
                results.push({...match, ...item});
            }
        })

        return results;
    }
}

let peopleData = new DataCollection3<Person>(people);
// let collatedData = peopleData.collate<City>(cities, "city", "name");

// collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));

let empData = peopleData.collate<Employee>(employees, "name", "name");
// empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));


// class SearchableCollection<T extends { name: string }> extends DataCollection3<T> {
//     // Basic inheritance for generic classes

//     constructor(initialItems: T[]) {
//         super(initialItems);
//     }
// }


// class SearchableCollection extends DataCollection3<Employee> {
//     // The child class inherits from parent class with only Employee type

//     constructor(initialItems: Employee[]) {
//         super(initialItems);
//     }

//     find(searchTerm: string): Employee[] {
//         return this.items.filter(item => {
//             return item.name === searchTerm || item.role === searchTerm;
//         })
//     }
// }

// let employeeData = new SearchableCollection(employees);
// employeeData.find("Sales").forEach(e => {
//     console.log(`Employee ${ e.name }, ${ e.role }`);
// })

class SearchableCollection<T extends Person | Employee> extends DataCollection3<T> {
    // The child class inherits from parent class with only Employee type

    constructor(initialItems: T[]) {
        super(initialItems);
    }

    find(searchTerm: string): T[] {
        return this.items.filter(item => {
            if (item instanceof Employee) {
                return item.name === searchTerm || item.role === searchTerm;
            } else {
                return item.name === searchTerm || item.city === searchTerm;
            }
        })
    }
}

let employeeData = new SearchableCollection<Employee>(employees);
employeeData.find("Sales").forEach(e => {
    console.log(`Employee ${ e.name }, ${ e.role }`);
})