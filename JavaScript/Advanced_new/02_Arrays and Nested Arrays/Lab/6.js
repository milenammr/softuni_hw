function solve(arr) {
    let newSortedArr = arr.sort((a, b) => a - b);
    let half = newSortedArr.slice(Math.floor(arr.length / 2), arr.length);
    //console.log(newSortedArr, half);
    return half;
}

solve([3, 19, 14, 7, 2, 19, 6]);