function sum(num){
    let str = num.toString();
    let odd = odd => odd % 2 != 0;
    //let even = even => even % 2 == 0;
    let oddSum = 0;
    let evenSum = 0;
    for (num of str){
        num = Number(num);
        if (odd(num)){
            oddSum += num;
        } else {
            evenSum += num;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
sum(3495892137259234)