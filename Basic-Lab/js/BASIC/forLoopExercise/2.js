function num (input) {
    let num = +input[0];
    let max = Number.MIN_SAFE_INTEGER;
    let n = +input[1];
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        n = +input[i];
        if (n > max) {
            max = n;
        }
        sum += n;
        

    }
    if (sum - max === max) {
        console.log(`Yes`);
        console.log(`Sum = ${sum - max}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(max - (sum - max))}`);
    }
    
}
num([ '3', '5', '5', '1'])