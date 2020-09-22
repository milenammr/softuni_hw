function solve(arr){
    let x1 = arr.shift();
    let y1 = arr.shift();
    let x2 = arr.shift();
    let y2 = arr.shift();
    let toZero1 = Math.sqrt((x1) ** 2 + (y1) ** 2);
    let toZero2 = Math.sqrt((x2) ** 2 + (y2) ** 2);
    let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log(`{${x1}, ${y1}} to {0, 0} ${Number.isInteger(toZero1) ? 'is valid' : 'is invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${Number.isInteger(toZero2) ? 'is valid' : 'is invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${Number.isInteger(distance) ? 'is valid' : 'is invalid'}`);
}
solve([2, 1, 1, 1])
solve([3, 0, 0, 4])
