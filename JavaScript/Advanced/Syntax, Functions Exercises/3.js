function solve(num){
    let str = num.toString();
    let num2 = str.split('').reverse().join('');
    if (str == num2){
        console.log('true');
    } else {
        console.log('false');
    }
    let sum = 0;
    for (let i of str){
        sum += Number(i);
    }
    console.log(sum);
}
solve (1234)