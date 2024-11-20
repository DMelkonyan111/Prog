import { sum } from "./calc.js";
function printMessage(msg) {
    console.log(`Message: ${msg}`);
}
printMessage("Hello, TypeScript1");
let total = sum(1, 2, 3);
console.log(`Total: ${total}`);
function calculateTax(amount, format) {
    if (amount == 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);
let zeroInstance = calculateTax(0, false);
console.log(`Number value: ${taxNumber.toFixed(2)}`);
console.log(`String value: ${taxString.toString(0)}`);
