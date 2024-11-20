export function sum(...vals : number[]) : number {
    return vals.reduce((total, num) => total + num);
}