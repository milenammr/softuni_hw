function solve(input) {
    let same = true;
    let arr = input.toString().split('');
    let sum = arr.map(Number).reduce(function (acc, curr, i, arr) {
        let first = arr[0];
        if (first != curr) {
            same = false;
        }   
        acc += curr;
        return acc;
    }, 0)
    console.log(same);
    console.log(sum);
}

solve(2222222)