function sumDigits (number){
    let num = number.toString();
    let sum = 0;
    for (let i = 0; i < num.length; i++){
        let digit = Number(num[i]);
        sum += digit;
    }
    console.log(sum);
}
sumDigits(65);