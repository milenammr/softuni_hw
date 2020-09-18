function addAndSubtract(a, b, c){
    let addNums = (x, y) => x + y;
    let subtractNums = (a, b) => a - b;
    let sum = (addNums(a, b));
    let subtract = (subtractNums(sum, c));
    console.log(subtract);
}
addAndSubtract(23, 6, 10);