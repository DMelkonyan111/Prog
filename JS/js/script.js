// let styles = ['Jazz', 'Blues']
// console.log(styles)

// styles.push('Rock-n-Roll')
// console.log(styles)

// styles[Math.floor(styles.length / 2)] = 'Classics'
// console.log(styles)

// let stripped = styles.shift()
// console.log(styles)

// styles.unshift('Rap', 'Reggae')
// console.log(styles)




// function sumInput() {
//     let a = prompt()
//     let arr = []

//     while (a != null && a != '' && !isNaN(a)) {
//         arr.push(+a)        
//         a = prompt()
//     }

//     if (arr.length == 0) {
//         return 0
//     }

//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }

//     return sum
// }

// console.log(sumInput())




// function getMaxSubSum(arr) {
//     let negative = true

//     for (let num of arr) {
//         if (num > 0) {
//             negative = false
//             break
//         }
//     }

//     if (negative) {
//         return []
//     }

//     let maxSubSum = 0
//     let maxSub = []

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > maxSubSum) {
//             maxSubSum = arr[i]
//             maxSub = [arr[i]]
//         }

//         if (i == arr.length - 2) {
//             if (arr.at(-2) + arr.at(-1) > maxSubSum) {
//                 return arr.at(-2) + arr.at(-1)
//             }

//             if (arr[i + 1] > maxSubSum) {
//                 return arr[i + 1]
//             }
//             return maxSubSum
//         }

//         let sum = arr[i] + arr[i + 1]

//         if (sum > maxSubSum) {
//             maxSub = [arr[i], arr[i + 1]]
//             maxSubSum = sum

//             for (let j = i + 2; j < arr.length; j++) {
//                 if (arr[j] >= 0) {
//                     maxSub.push(arr[j])
//                     maxSubSum += arr[j]
//                     continue
//                 }

//                 break
//             }
//         } else {
//             let current = [arr[i], arr[i + 1]]

//             for (let j = i + 2; j < arr.length; j++) {
//                 if (arr[j] >= 0) {
//                     sum += arr[j]
//                     current.push(arr[j])

//                     if (sum > maxSubSum) {
//                         maxSubSum = sum
//                         maxSub = [...current, arr[j]]
//                     }

//                     continue
//                 }

//                 break
//             }
//         }
//     }
    
//     return maxSubSum        
// }

// // console.log(getMaxSubSum([1, 2, -1, 4, -5, 4, 2, -6, 1, 0, 0, 2, 0, 4]))
// // console.log(getMaxSubSum([1, 2, 3]))
// // console.log(getMaxSubSum([-1, 2, 3, -9, 11]))









// function camelize(str) {
//     let arr = str.split('-')

//     let resArr = []

//     for (let i = 1; i < arr.length; i++) {
//         let res = arr[i][0].toUpperCase() + arr[i].slice(1)
//         resArr.push(res)
//     }

//     resArr.unshift(arr[0])
//     return resArr.join('')
// }

// console.log(camelize("list-style-image"))








// let arr1 = [5, 3, 8, 1]

// function filterRangeInPlace(arr, a, b) {
//     arr = arr.filter(item => item >= a && item <= b)

//     // arr = res
// }

// filterRangeInPlace(arr1, 2, 6)
// console.log(arr1)





// let user = {
//     name: 'John',
//     years: 30
// }

// let {name, years: age, isAdmin = false} = user

// console.log(name, age, isAdmin)






// function topSalary(salaries) {
//     if (Object.keys(salaries).length == 0) {
//         return null
//     }
    
//     let [richest, max] = ['', 0];
    
//     for (let [name, salary] of Object.entries(salaries)) {
//         if (salary > max) {
//             [richest, max] = [name, salary]
//         }
//     }

//     return richest
// }

// topSalary({
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// })





// function sumTo(n) {
//     return (n == 1) ? 1 : n + sumTo(n - 1)
// }

// console.log(sumTo(10))



// function factorial(n) {
//     return (n == 1) ? 1 : n * factorial(n - 1);
// }

// console.log(factorial(10))


// function fibonacci(n) {
//     if (n == 1 || n == 2) {
//         return 1
//     }

//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(77))



// function printList(list) {
//     console.log(list)

//     if (list.next) {
//         printList(list.next)
//     }
// }

// console.log(printList({
//     value: 1,
//     next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: {
//                 value: 4,
//                 next: null
//             }
//         }
//     }
// }))





// function printNumbers(from, to) {
//     // let interval = setInterval(() => {
//         // if (from == to) {
//         //     clearInterval(interval)
//         // }

//         // console.log(from++)
//     // }, 1000)




//     let timeout = setTimeout(function go() {
//         console.log(from)

//         if (from == to) {
//             clearInterval(timeout)
//             return
//         }

//         from++;
//         timeout = setTimeout(go, 1000)
//     }, 1000)
// }

// printNumbers(1, 5)










// class Person {
//     constructor(name, age, country) {
//         this.name = name
//         this.age = age
//         this.country = country
//     }

//     about() {
//         console.log(`I am ${this.name} from ${this.country}, aged ${this.age}`)
//     }
// }

// let user = new Person('Jack', 20, 'USA')
// user.about()



// class Rectangle {
//     constructor(w, h) {
//         this.width = w
//         this.height = h
//     }

//     area() {
//         console.log(this.width * this.height)
//     }

//     perimeter() {
//         console.log(2 * (this.width + this.height))
//     }
// }

// let r = new Rectangle(10, 5)
// r.area()
// r.perimeter()




// class Vehicle {
//     constructor(model, year) {
//         this.model = model
//         this.year = year
//     }

//     display() {
//         console.log('Model: ' + this.model)
//         console.log('Year: ' + this.year)
//     }
// }

// class Car extends Vehicle {
//     constructor(model, year, doors) {
//         super(model, year)
//         this.doors = doors
//     }

//     display() {
//         super.display()
//         console.log('Doors: ' + this.doors)
//     }
// }

// let car1 = new Car('Mercedes C280', 2000, 4)
// car1.display()





// class BankAccount {
//     constructor(id, balance) {
//         this.id = id
//         this.balance = balance
//     }

//     deposit(sum) {
//         if (sum >= 0) {
//             this.balance += sum
//         }
//     }

//     withdraw(sum) {
//         if (sum >= 0 && sum <= this.balance) {
//             this.balance -= sum
//         }
//     }
// }

// let user1 = new BankAccount(1, 10000)

// user1.deposit(2000)
// console.log(user1.balance)
// user1.withdraw(4000)
// console.log(user1.balance)






// function adding() {
//     let list = document.createElement('ul')
//     list.class = 'list'
//     document.body.append(list)

//     let info = prompt()

//     while (info) {
//         let elem = document.createElement('li')
//         elem.textContent = info
//         list.append(elem)
//         info = prompt()
//     }
// }

// adding()




// function showNotification({top = 0, right = 0, className, html}) {
//     let div = document.createElement('div')
//     div.className = 'notification ' + className
//     div.style.position = 'absolute'
//     div.style.top = top + 'px'
//     div.style.right = right + 'px'
//     div.innerHTML = html

//     document.body.append(div)

//     setInterval(() => {
//         div.style.display = 'none'
//     }, 1500)
// }

// let i = 1;
// setInterval(() => {
//     showNotification({
//         top: 10,
//         right: 10,
//         html: 'Hello ' + i++,
//         className: "welcome"
//     });
// }, 2000);








// let a = 0

// function f1() {
//     console.log(1, 2)

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('a: ' + a)
//             resolve(a + 2)
//         }, 1000)
//     })
// }

// function f2(b) {
//     console.log(3, 4)

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('a: ' + b)
//             resolve(b + 5)
//         }, 1000)
//     })
// }

// function f3(c) {
//     console.log(5, 6)

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('a: ' + c)
//             resolve(c + 10)
//         }, 2000)
//     })
// }

// f1().then(value => {
//     return f2(value)
// }).then(value => {
//     return f3(value)
// }).then(value => {
//     console.log('a: ' + value)
// })



// let a = true

// let promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(a)
//         resolve(!a)
//     }, 1000)
// })

// let promiseTwo = promiseOne.then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(value)
//             resolve(!value)
//         }, 1000)  
//     })
// })

// let promiseThree = promiseTwo.then(value => {
//     setTimeout(() => {
//         console.log(value)
//     }, 1000)
// })




// function f1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(true)
//         }, 2000)
//     })
// }

// function f2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("ERROR")
//         }, 1000)
//     })
// }

// function f3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("ABC")
//         }, 1000)
//     })
// }


// async function f() {
//     try {
//         let res1 = await f1()
//         console.log(res1)
    
//         let res2 = await f2()
//         console.log(res2)
    
//         let res3 = await f3()
//         console.log(res3)
//     } catch(err) {
//         console.log(err)
//     }
// }

// f()


// function insertionSort(arr) {
//     let temp;
//     outer: for (let i = 1; i < arr.length; i++) {
//         let current = arr[i]

//         for (let j = i - 1; j >= 0; j--) {
//             if (current < arr[j]) {
//                 // [arr[i], arr[j]] = [arr[j], arr[i]]
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             } else {
//                 continue outer
//             }
//         }
//     }

//     return arr
// }

// let arr = [1, 4, 5, 3, 7, 2, 6, 7, 5, 4, 5, 7]
// console.log(insertionSort(arr))




// let key1 = {
//     a: 1
// }

// key2 = key1;

// let map = new Map();
// map.set(key1, "abc");

// console.log(map.get(key1));
// console.log(map.get(key2));




// Principle from movie "21"

const results = []

function principleFromTheMovie() {
    const values = [
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"],
        ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"]
    ]
    
    let victory = false
    
    const winIndexI = Math.floor(Math.random() * 10)
    const winIndexJ = Math.floor(Math.random() * 10)
    
    const chosenIndexI = Math.floor(Math.random() * 10)
    const chosenIndexJ = Math.floor(Math.random() * 10)
    values[chosenIndexI][chosenIndexJ] = "*"

    if (winIndexI == chosenIndexI && winIndexJ == chosenIndexJ) {
        let randomIndexI = Math.floor(Math.random() * 10)
        let randomIndexJ = Math.floor(Math.random() * 10)

        while (randomIndexI == winIndexI && randomIndexJ == winIndexJ) {
            randomIndexI = Math.floor(Math.random() * 10)
            randomIndexJ = Math.floor(Math.random() * 10)
        }

        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < values[i].length; j++) {
                if ((i == winIndexI && j == winIndexJ) || (i == randomIndexI && j == randomIndexJ)) {
                    continue
                }
    
                values[i][j] = 0
            }
        }

        // const doYouWantToChange = prompt("Do you change your choice");
        const doYouWantToChange = true;

        if (doYouWantToChange) {
            // alert("You lost")
        } else {
            // alert("You won")
            victory = true
        }
    } else {
        for (let i = 0; i < values.length; i++) {
            for (let j = 0; j < values[i].length; j++) {
                if ((i == winIndexI && j == winIndexJ) || (i == chosenIndexI && j == chosenIndexJ)) {
                    continue
                }
    
                values[i][j] = 0
            }
        }

        // const doYouWantToChange = prompt("Do you change your choice");
        const doYouWantToChange = true;

        if (doYouWantToChange) {
            // alert("You won")
            victory = true
        } else {
            // alert("You lost")
        }
    }   


    // console.log(values)
    return victory ? 1 : 0
}

let winCounter = 0;

for (let i = 0; i < 100; i++) {
    if (principleFromTheMovie()) {
        results.push(1)
        winCounter++
    } else {
        results.push(0)
    }
}

console.log((winCounter / results.length * 100) + "%")

// principleFromTheMovie()