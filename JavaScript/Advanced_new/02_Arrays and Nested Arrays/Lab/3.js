function solve(arr) {
    let newArr = arr.map(Number);
    let sum = newArr[0] + newArr[newArr.length - 1];
    //console.log(sum);
    return sum;
}

solve(['5', '10']);
