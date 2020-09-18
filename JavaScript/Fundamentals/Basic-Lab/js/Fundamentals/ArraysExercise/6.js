function equalSum(arr){
    let counter = 0;
    let rightSum = 0;
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            rightSum += arr[j];
        }
        for (let k = 0; k < i; k++){
            leftSum += arr[k];
        }
        if (leftSum == rightSum){
            console.log(i);
            counter++;
        }
        rightSum = 0;
        leftSum = 0;
    }

    if (counter == 0) {
        console.log('no');       
    }
}
equalSum([1, 2, 3, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
equalSum([1])