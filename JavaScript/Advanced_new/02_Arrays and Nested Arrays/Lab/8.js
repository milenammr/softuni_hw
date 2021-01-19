function solve(arr) {
    let filtred = arr.filter((x, i) => i % 2 != 0);
    let newArr = filtred.map(x => x * 2).reverse();
    console.log(newArr.join(' '));
}

solve([3, 0, 10, 4, 7, 3])