function solve(num1, operator, num2){
    let result;
    switch (operator){
        case '+':
        result = num1 + num2;
        break;
        case '-':
        result = num1 - num2;
        break;
        case '*':
        result = num1 * num2;
        break;
        case '/':
        result = num1 / num2;
        break;
    }
    console.log(result.toFixed(2));
}
solve(25.5,
    '-',
    3
    
    )