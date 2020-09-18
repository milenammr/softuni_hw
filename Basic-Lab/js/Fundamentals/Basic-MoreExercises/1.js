function order (firstNum, secondNum, thirdNum){
    let min = Number.MIN_SAFE_INTEGER;
    let max = 0;
    let first = firstNum;
    let second = secondNum;
    let third = thirdNum;
    for (let i = 0; i < 3; i++){
        if (first > min){
            min = first;
        }
        if (second > min){
            min = second;
        }
        if (third > min){
            min = third;
        }
        console.log(min);
    }

}
order (2, 1, 3);