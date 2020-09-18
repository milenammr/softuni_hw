function solve(num1, num2, num3){
    let result = (a, b) => a * b;
    if (result(num1, num2) * num3 < 0){
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}
solve(6, 8, -14);