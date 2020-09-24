function solve(arr){
    let newArr = [];
    for (let i of arr){
        i < 0 ? newArr.unshift(i) : newArr.push(i);
    }
    for (let i of newArr){
        console.log(i);
    }
}
solve([3, -2, 0, -1])