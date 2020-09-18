function factorialNum(num1, num2){
    function factorial(a){
        let factorialSum = a;
        for (let i = 1; i < a; i++){
            factorialSum *= (a - i);
        }
        return factorialSum;
    }
    let result = factorial(num1) / factorial(num2);
    console.log(result.toFixed(2));
}
factorialNum(6, 2);