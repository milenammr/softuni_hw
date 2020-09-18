function sum(numbers){
    let result = 0;
    for (let num of numbers){
        num = Number(num);
        if (num % 2 === 0){
            result += num;
        }
    }
    console.log(result);
}
sum(['3','5','7','9'])