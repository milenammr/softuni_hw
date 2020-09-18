function amazingNum(number){
    number = number.toString();
    let sum = 0;
    for (let i = 0; i < number.length; i++){
        let digit = number.charAt(i);
        sum += Number(digit);
    }
    let result = sum.toString().includes('9') ? `${number} Amazing? True` : `${number} Amazing? False`
    console.log(result);
}
amazingNum(999);