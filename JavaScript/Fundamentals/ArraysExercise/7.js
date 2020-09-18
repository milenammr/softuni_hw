function maxSequence(arr){
    let result;
    let elements = '';
    for (let i = 0; i < arr.length; i++){
        result = arr[i] + ' ';

        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]){
                result += arr[j] + ' ';
            } else {
                break;
            }
        }

        if (elements.length < result.length){
            elements = result;
        }
    }
    console.log(elements);
}
maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])