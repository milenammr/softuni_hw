function solve (n1, n2, operator){
    let sum = 0;
    switch (operator){
        case '+': sum = n1 + n2;
            break;
        case '-': sum = n1 - n2;
            break;
        case '*': sum = n1 * n2;
            break;
        case '/': sum = n1 / n2;
            break;
        case '%': sum = n1 % n2;
            break;
        case '**': sum = n1 ** n2;
            break;
    }
    console.log(sum);
}
solve(5, 6, '+');