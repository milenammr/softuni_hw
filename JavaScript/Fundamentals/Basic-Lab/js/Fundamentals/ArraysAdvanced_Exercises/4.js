function sorting(arr){
    let newArr = [];
    arr.sort((a, b) => a - b);
    while (arr.length > 1){
        max = arr.pop();
        newArr.push(max);
        min = arr.shift();
        newArr.push(min);
    }
    if (arr.length > 0){
        newArr.push(arr[0]);
    }
    console.log(newArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 5])