function sum (input) {
    let number = +input.shift();
    let num2;
    let sum = 0;

    for (let i = 0; number > i; i++) {
        num2 = +input.shift();
        sum += num2;
    }
    console.log (sum);
}

sum ([ 2,3,5 ])