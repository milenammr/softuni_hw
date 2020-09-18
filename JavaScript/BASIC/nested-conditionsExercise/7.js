function math(input) {
    let n1 = +input.shift();
    let n2 = +input.shift();
    let operator = input.shift();
    let result;
    switch (operator) {
        case '+':
            result = n1 + n2;
            if (result % 2 == 0) {
                console.log(`${n1} + ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} + ${n2} = ${result} - odd`);
            }
            break;
        case '-':
            result = n1 - n2;
            if (result % 2 == 0) {
                console.log(`${n1} - ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} - ${n2} = ${result} - odd`);
            }
            break;
        case '*':
            result = n1 * n2;
            if (result % 2 == 0) {
                console.log(`${n1} * ${n2} = ${result} - even`);
            } else {
                console.log(`${n1} * ${n2} = ${result} - odd`);
            }
            break;
            case '/':
            result = n1 / n2;
            if (n2 == 0){
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
            }
            break;
            case '%':
            result = n1 % n2;
            if (n2 == 0){
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} % ${n2} = ${result}`);
            }
            
            break;
    }

}
math(['112', '0', '/'])