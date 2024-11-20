function calculateTax1(amount : number, discount? : number, ...extraFees : number[]) : number {    // Optional parameters always come last
    return amount * 1.2 - (discount || 0) + extraFees.reduce((total, val) => total + val, 0);
}

function calculateTax2(amount : number | null, discount : number = 0, ...extraFees : number[]) : number | undefined {    
    if (amount != null) {
        return amount * 1.2 - discount + extraFees.reduce((total, val) => total + val, 0);
    } else {
        return undefined;
    }
}


let taxValue = calculateTax2(100);
// console.log(`Total Amount: ${taxValue}`);

taxValue = calculateTax2(100, 20);
// console.log(`Total Amount: ${taxValue}`);

taxValue = calculateTax2(100, 20, 30);
// console.log(`Total Amount: ${taxValue}`);




function writeValue(label : string, value : number) : void {
    console.log(`${label} : ${value}`);
}

// writeValue("Price", 500);

function double(a : number) : number;
function double(a : null) : null;
function double(a : number | null) : number | null {
    if (a != null) {
        return a * 2;
    }

    return null;
}

let res : number = double(10);
// writeValue("Value", res);


function check(condition : boolean) : asserts condition {
    if (!condition) {
        throw new Error("Expression is false");
    }
}

function checkNumber(val: any) : asserts val is number {
    if (typeof val != "number") {
        throw new Error("Not a number");
    }
}

function calculateTax3(amount: number | null) : number {
    // check(typeof amount == "number");
    checkNumber(amount);
    return amount * 1.2;
}

// console.log(`Amount: ${calculateTax3(200)}`);


let product: [string, number] = ["Hat", 150];     // Tuple

type numbers = 1 | 2 | 3 | 4;
let num : numbers = 3;


enum Feature {Waterproof, Insulated};

let hat = {name: "Hat", price: 100};
let gloves = {name: "Gloves", price: 75};
let umbrella = {
    name: "Umbrella",
    price: 30,

    hasFeature: (feature) => {
        return feature === Feature.Waterproof;
    }
}

let products1 : {name: string, price: number, hasFeature?(Feature)}[] = [hat, gloves, umbrella];
// products1.forEach(el => console.log(`${el.name}: $${el.price}, ${el.hasFeature ? el.hasFeature(Feature.Waterproof) : false}`));

type Product = {
    name: string,
    price: number,
    hasFeature?(Feature): boolean
}

let products2 : Product[] = [hat, gloves, umbrella];
// products2.forEach(el => console.log(`${el.name}: $${el.price}, ${el.hasFeature ? el.hasFeature(Feature.Waterproof) : false}`));


type Vehicle = {
    id: number,
    name: string,
    price: number
}

type City = {
    id: number,
    name: string,
    country: string
}

let vehicle1: Vehicle = {id: 1, name: "BMW", price: 5000}
let vehicle2: Vehicle = {id: 2, name: "Audi", price: 7000}
let city1: City = {id: 1, name: "Yerevan", country: "Armenia"}
let city2: City = {id: 2, name: "Venice", country: "Italy"}

let data: (Vehicle | City)[] = [vehicle1, vehicle2, city1, city2];

data.forEach(el => {
    if ("price" in el) {
        console.log(`Car N${el.id}: ${el.name} $${el.price}`)
    } else {
        console.log(`City N${el.id}: ${el.name} located in ${el.country}`)
    }
})

function isVehicle(obj: any) : obj is Vehicle {
    return obj.price !== undefined;
}

function isCity(obj: any) : obj is City {
    return obj.country !== undefined;
}

data.forEach(el => {
    if (isVehicle(el)) {
        console.log(`Car N${el.id}: ${el.name} $${el.price}`)
    } else if (isCity(el)) {
        console.log(`City N${el.id}: ${el.name} located in ${el.country}`)
    }
})

type Car = {
    hp: number,
    engine: number
}

let car1 = {id: 1, name: "BMW", price: 5000, hp: 200, engine: 3.0};
let car2 = {id: 2, name: "Audi", price: 7000, hp: 250, engine: 3.5};

let cars: (Vehicle & Car)[] = [car1, car2];

cars.forEach(el => {
    console.log(`Car N${el.id}: ${el.name} $${el.price}, \n details: horse power ${el.hp}, engine capacity ${el.engine.toFixed(1)} `)
})

type Person = {
    id: string,
    name: string,
    age: number,
}

type Employee = {
    id: string,
    company: string,
    department: string,
}

type EmployedPerson = Person & Employee;

function correlateData(people: Person[], employees: Employee[]) : EmployedPerson[] {
    const defaultValues = {company: "None", department: "None"};

    return people.map(p => ({...p, ...employees.find(e => e.id === p.id) || {...defaultValues}}));
    
    // return people.map(p => ({ ...p, ...employees.find(e => e.id === p.id) || { ...defaultValues, id: p.id } }));
}

let people: Person[] =[
    { id: "bsmith", name: "Bob Smith", age: 30 },
    { id: "ajones", name: "Alice Jones", age: 35},
    { id: "dpeters", name: "Dora Peters", age: 28}
];

let employees: Employee[] = [
    { id: "bsmith", company: "Acme Co", department: "Sales" },
    { id: "dpeters", company: "Acme Co", department: "Development" }
];

let dataOnPeople: EmployedPerson[] = correlateData(people, employees);
// console.log(dataOnPeople);

type Person1 = {
    id: string,
    name: string,
    age: number,
    contact: {phone: number}
}

type Employee1 = {
    id: string,
    company: string,
    department: string,
    contact: {code: string}
}

type EmployedPerson1 = Person1 & Employee1;

let employedPerson1: EmployedPerson1 = {
    id: "abc",
    name: "Alice",
    age: 30,
    company: "Apple",
    department: "Marketing",
    contact: {phone: 14576, code: "12668asd"}
}

// console.log(employedPerson1);




