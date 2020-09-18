function solve(arr){
    let sum = 0;
    let sum2 = 0;
    let concat = '';
    for (let i of arr){
        sum += i;
        sum2 += 1 / i;
        concat += i;
    }
    console.log(sum);
    console.log(sum2);
    console.log(concat);
}
solve([1, 2, 3])