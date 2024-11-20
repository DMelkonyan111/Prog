function calculateTax1(amount, discount, ...extraFees) {
    return amount * 1.2 - (discount || 0) + extraFees.reduce((total, val) => total + val, 0);
}
function calculateTax2(amount, discount = 0, ...extraFees) {
    if (amount != null) {
        return amount * 1.2 - discount + extraFees.reduce((total, val) => total + val, 0);
    }
    else {
        return undefined;
    }
}
let taxValue = calculateTax2(100);
// console.log(`Total Amount: ${taxValue}`);
taxValue = calculateTax2(100, 20);
// console.log(`Total Amount: ${taxValue}`);
taxValue = calculateTax2(100, 20, 30);
// console.log(`Total Amount: ${taxValue}`);
function writeValue(label, value) {
    console.log(`${label} : ${value}`);
}
function double(a) {
    if (a != null) {
        return a * 2;
    }
    return null;
}
let res = double(10);
// writeValue("Value", res);
function check(condition) {
    if (!condition) {
        throw new Error("Expression is false");
    }
}
function checkNumber(val) {
    if (typeof val != "number") {
        throw new Error("Not a number");
    }
}
function calculateTax3(amount) {
    // check(typeof amount == "number");
    checkNumber(amount);
    return amount * 1.2;
}
// console.log(`Amount: ${calculateTax3(200)}`);
let product = ["Hat", 150]; // Tuple
let num = 3;
var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
;
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = {
    name: "Umbrella",
    price: 30,
    hasFeature: (feature) => {
        return feature === Feature.Waterproof;
    }
};
let products1 = [hat, gloves, umbrella];
let products2 = [hat, gloves, umbrella];
let vehicle1 = { id: 1, name: "BMW", price: 5000 };
let vehicle2 = { id: 2, name: "Audi", price: 7000 };
let city1 = { id: 1, name: "Yerevan", country: "Armenia" };
let city2 = { id: 2, name: "Venice", country: "Italy" };
let data = [vehicle1, vehicle2, city1, city2];
data.forEach(el => {
    if ("price" in el) {
        console.log(`Car N${el.id}: ${el.name} $${el.price}`);
    }
    else {
        console.log(`City N${el.id}: ${el.name} located in ${el.country}`);
    }
});
function isVehicle(obj) {
    return obj.price !== undefined;
}
function isCity(obj) {
    return obj.country !== undefined;
}
data.forEach(el => {
    if (isVehicle(el)) {
        console.log(`Car N${el.id}: ${el.name} $${el.price}`);
    }
    else if (isCity(el)) {
        console.log(`City N${el.id}: ${el.name} located in ${el.country}`);
    }
});
let car1 = { id: 1, name: "BMW", price: 5000, hp: 200, engine: 3.0 };
let car2 = { id: 2, name: "Audi", price: 7000, hp: 250, engine: 3.5 };
let cars = [car1, car2];
cars.forEach(el => {
    console.log(`Car N${el.id}: ${el.name} $${el.price}, \n details: horse power ${el.hp}, engine capacity ${el.engine.toFixed(1)} `);
});
function correlateData(people, employees) {
    const defaultValues = { company: "None", department: "None" };
    return people.map(p => ({ ...p, ...employees.find(e => e.id === p.id) || { ...defaultValues } }));
    // return people.map(p => ({ ...p, ...employees.find(e => e.id === p.id) || { ...defaultValues, id: p.id } }));
}
let people = [
    { id: "bsmith", name: "Bob Smith", age: 30 },
    { id: "ajones", name: "Alice Jones", age: 35 },
    { id: "dpeters", name: "Dora Peters", age: 28 }
];
let employees = [
    { id: "bsmith", company: "Acme Co", department: "Sales" },
    { id: "dpeters", company: "Acme Co", department: "Development" }
];
let dataOnPeople = correlateData(people, employees);
let employedPerson1 = {
    id: "abc",
    name: "Alice",
    age: 30,
    company: "Apple",
    department: "Marketing",
    contact: { phone: 14576, code: "12668asd" }
};
console.log(employedPerson1);
