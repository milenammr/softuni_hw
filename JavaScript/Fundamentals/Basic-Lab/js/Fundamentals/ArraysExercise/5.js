function maxNumber(arr){
    let result = '';
    let count = 0;
    let topInt = '';
    for(let i = 0; i < arr.length; i++){
        count++;
        for (let k = count; k < arr.length; k++){
            if (arr[i] > arr[k]){
                result = arr[i] + ' ';
            } else {
                result = '';
                break;
            }
        }
        topInt += result;
        result = '';
    }
    console.log(topInt + (arr[arr.length - 1]));
}
// maxNumber([1, 4, 3, 2]);
// maxNumber([14, 24, 3, 19, 15, 17])
// maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])