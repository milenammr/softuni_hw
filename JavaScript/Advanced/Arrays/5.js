function solve(arr){
    let newArr = [];
    for (let i in arr){
        if (i % 2 != 0){
            newArr.push(arr[i]);
        }
    }
    let result = newArr
        .map(x => x * 2)
        .reverse()
        .join(' ');
    console.log(result);
}
solve([10, 15, 20, 25])