// class Employee {
//     public readonly id: string;
//     public name: string;
//     private dept: string;
//     public city: string;

//     constructor(id: string, name: string, dept: string, city: string) {
//         this.id = id,
//         this.name = name,
//         this.dept = dept,
//         this.city = city
//     }

//     writeDept() {
//         console.log(`${this.name} works in ${this.dept}`);
//     }
// }




// abstract class Person {
//     constructor (public id: string, public name: string, public city: string) {}

//     getDetails(): string {
//         return `${this.name}, ${this.getSpecificDetails()}`;
//     }

//     abstract getSpecificDetails(): string;
// }

// class Employee extends Person{
//     constructor(public readonly id: string, public name: string, private dept: string, public city: string) {
//         super(id, name, city);
//     }

//     writeDept() {
//         console.log(`${this.name} works in ${this.dept}`);
//     }

//     getSpecificDetails(): string {
//         return `Works in ${this.city}`;
//     }

//     // get location() {
//     //     switch(this.city) {
//     //         case "Paris":
//     //             return "France";
//     //         case "London":
//     //             return "England"
//     //         default:
//     //             return this.city
//     //     }
//     // }

//     // set location(d: string) {
//     //     this.city = d;
//     // }

//     // get details() {
//     //     return `${this.name}, ${this.name}, ${this.dept}, ${this.city}`;
//     // }

//     // accessor salary: number = 100000;
// }

// class Customer extends Person {
//     constructor(public readonly id: string, public name: string, public city: string, public creditLimit: number) {
//         super(id, name, city);
//     }

//     getSpecificDetails() {
//         return `Has ${this.creditLimit} limit`;
//     }
// }

// class Supplier extends Person {
//     constructor(public readonly id: string, public name: string, public city: string, public companyName: string) {
//         super(id, name, city);
//     }

//     getSpecificDetails() {
//         return `Works for ${this.companyName}`;
//     }
// }

// let data: (Person | Employee )[] = [
//     { id: "bsmith", name: "Bob Smith", city: "London" },
//     { id: "ajones", name: "Alice Jones", city: "Paris"},
//     { id: "dpeters", name: "Dora Peters", city: "New York"},
//     salesEmployee
// ];

// let data: Person[] = [
//     new Employee("fvega", "Fidel Vega", "Sales", "Paris"), 
//     new Customer("ajones", "Alice Jones", "London", 500)
// ];

// data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

// data.forEach(item => console.log(item.getDetails()));





interface Person {
    name: string,
    getDetails(): string
}

interface DogOwner {
    dogName: string,
    getDogDetails(): string
}

class Employee implements Person {
    constructor(public readonly id: string, public name: string, private dept: string, public city: string) { }

    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}

class Customer implements Person, DogOwner {
    constructor(public readonly id: string, public name: string, public city: string, public creditLimit: number, public dogName: string) { }

    getDetails(): string {
        return `${this.name} has ${this.creditLimit} limit`;
    }

    getDogDetails(): string {
        return `${this.name} has a dog named ${this.dogName}`;
    }
}

let alice = new Customer("ajones", "Alice Jones", "London", 500, "Fido");
let dogOwners: DogOwner[] = [alice];

dogOwners.forEach(item => console.log(item.getDogDetails()));

let data: Person[] = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"), alice];

data.forEach(item => console.log(item.getDetails()));