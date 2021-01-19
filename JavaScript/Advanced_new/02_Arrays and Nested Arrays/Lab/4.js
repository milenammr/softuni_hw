function solve(arr) {
    let newArr = [];
    arr.map(x => {
        x < 0 ? newArr.unshift(x) : newArr.push(x);
    });
    console.log(newArr, arr);
    return newArr;
}

solve([3, -2, 0, -1]);