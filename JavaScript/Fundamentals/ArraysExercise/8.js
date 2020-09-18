function magicSum(arr, num){
    let result = 0;
    let iteration = 0;
    for(let number of arr){
        iteration++;
        for(let number2 = iteration; number2 < arr.length; number2++){
            
            if (number + arr[number2] === num){
                result = `${number} ${arr[number2]}`
                console.log(result);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23],
    8
    )
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    )