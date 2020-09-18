function numbers (input) {
    let num = +input.shift();
    let even;
    let odd;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < num; i++) {
        
        if (i % 2 === 0) {
            even = +input.shift();
            sumEven += even;
        } else {
            odd = +input.shift();
            sumOdd += odd;
        }
        
    }
    if (sumEven === sumOdd) {
        console.log(`Yes`);
        console.log(`Sum = ${sumEven}`)
    } else {
        console.log (`No`);
        console.log (`Diff = ${Math.abs(sumEven - sumOdd)}`)
    }

}
numbers ([ '3', '5', '8', '1' ])