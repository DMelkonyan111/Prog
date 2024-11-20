declare function calculateTax1(amount: number, discount?: number, ...extraFees: number[]): number;
declare function calculateTax2(amount: number | null, discount?: number, ...extraFees: number[]): number | undefined;
declare let taxValue: number | undefined;
declare function writeValue(label: string, value: number): void;
declare function double(a: number): number;
declare function double(a: null): null;
declare let res: number;
declare function check(condition: boolean): asserts condition;
declare function checkNumber(val: any): asserts val is number;
declare function calculateTax3(amount: number | null): number;
declare let product: [string, number];
type numbers = 1 | 2 | 3 | 4;
declare let num: numbers;
declare enum Feature {
    Waterproof = 0,
    Insulated = 1
}
declare let hat: {
    name: string;
    price: number;
};
declare let gloves: {
    name: string;
    price: number;
};
declare let umbrella: {
    name: string;
    price: number;
    hasFeature: (feature: any) => boolean;
};
declare let products1: {
    name: string;
    price: number;
    hasFeature?(Feature: any): any;
}[];
type Product = {
    name: string;
    price: number;
    hasFeature?(Feature: any): boolean;
};
declare let products2: Product[];
type Vehicle = {
    id: number;
    name: string;
    price: number;
};
type City = {
    id: number;
    name: string;
    country: string;
};
declare let vehicle1: Vehicle;
declare let vehicle2: Vehicle;
declare let city1: City;
declare let city2: City;
declare let data: (Vehicle | City)[];
declare function isVehicle(obj: any): obj is Vehicle;
declare function isCity(obj: any): obj is City;
type Car = {
    hp: number;
    engine: number;
};
declare let car1: {
    id: number;
    name: string;
    price: number;
    hp: number;
    engine: number;
};
declare let car2: {
    id: number;
    name: string;
    price: number;
    hp: number;
    engine: number;
};
declare let cars: (Vehicle & Car)[];
type Person = {
    id: string;
    name: string;
    age: number;
};
type Employee = {
    id: string;
    company: string;
    department: string;
};
type EmployedPerson = Person & Employee;
declare function correlateData(people: Person[], employees: Employee[]): EmployedPerson[];
declare let people: Person[];
declare let employees: Employee[];
declare let dataOnPeople: EmployedPerson[];
type Person1 = {
    id: string;
    name: string;
    age: number;
    contact: {
        phone: number;
    };
};
type Employee1 = {
    id: string;
    company: string;
    department: string;
    contact: {
        code: string;
    };
};
type EmployedPerson1 = Person1 & Employee1;
declare let employedPerson1: EmployedPerson1;
