function solve(numbers) {
    let result = 0;
    let arr = numbers;
    while (arr.length !== 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            result = arr[i] + arr[i + 1];
            arr[i] = result;
        }
        arr.pop();
    }
    console.log(arr[0]);
}
solve([1, 2, 3])