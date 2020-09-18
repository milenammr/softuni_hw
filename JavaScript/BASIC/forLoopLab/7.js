function numbers (input) {
    let num = +input.shift();
    let left;
    let leftSum = 0;
    let right;
    let rightSum = 0;
    for (let i = 0; num > i; i++) {
        left = +input.shift();
        leftSum += left;
    }
    for (let i = 0; num > i; i++) {
        right = +input.shift();
        rightSum += right;
    }
    if (leftSum === rightSum) {
        console.log(`Yes, sum = ${rightSum}`);
    } else {
        let sum = leftSum - rightSum;
        console.log(`No, diff = ${Math.abs(sum)}`);
    }


}
numbers([ '2', '3', '3', '8', '1' ])