function solve(n, k){
    let arr = [1];
    let result;
    let newArr;
    for (let i = 0; i < n - 1; i++){
        if (arr.length - k < 0){
            result = arr.reduce((a, x) => a += x); 
            arr.push(result);
        } else {
            newArr = arr.slice(arr.length - k);
            result = newArr.reduce((a, x) => a += x);
            arr.push(result);
        }
    }
    console.log(arr);
}
solve (6, 3)