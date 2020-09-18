function solve(numbers){
    let modifiedArr = [];
    let sumOfNumbersArr = 0;
    let sumOfModifiedArr = 0;
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 == 0){
            modifiedArr[i] = numbers[i] + i;
        } else {
            modifiedArr[i] = numbers[i] - i;
        }
        sumOfNumbersArr += numbers[i];
        sumOfModifiedArr += modifiedArr[i];
    }
    console.log(modifiedArr);
    console.log(sumOfNumbersArr);
    console.log(sumOfModifiedArr);
}
solve([-5, 11, 3, 0, 2])