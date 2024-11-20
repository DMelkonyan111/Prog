let arr1 = [1, 2, 3]

let arr2: number[] = [1, 2, 3, 4]

let arr3: (string | boolean)[]
arr3 = ['as', 'asd', true]


//tuples
let tuple1: [string, boolean, number] = ['as', false, 15]
// tuple1[1] = 15  error
// tuple1[3] = 15  error


// objects
let obj1 = {
    name: "D",
    age: 15
}

// obj1.city = 'Yerevan'  error: can't add propety

type Person = {
    name?: string
    age: number
    alive: boolean
    parents: string[]
}

const person1: Person = {
    name: "A",
    age: 10,
    alive: true,
    parents: ['B', 'C']
}

const func1 = (p: Person) => {
    return `Hello ${p?.name}`
}



type mathFunction = (a: number, b: number) => number

const multiply: mathFunction = (a, b) => {
    return a * b
}

console.log(multiply(3, 4))

function foo() {
    var x = 10;
    console.log(x);
    
}

foo();

console.log(x);
