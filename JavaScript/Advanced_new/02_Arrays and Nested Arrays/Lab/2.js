function solve(n, k) {
    let arr = [1];
    let sum = 0;

    for (let i = 1; i < n; i++){
        let numbers = arr.slice(-k, arr.length);
        sum = numbers.reduce((acc, current) => acc + current);
        arr.push(sum);
    }
    //console.log(arr);
    return arr;
}

//solve(6, 3);
solve(8, 2);