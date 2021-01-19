function solve(arr){
    let newArr = [];
    for (let i = 0; i < 2; i++){
        let result = Math.min(...arr);
        arr.splice(arr.indexOf(result), 1);
        newArr.push(result);
    }
    console.log(newArr.join(' '));
}

solve([3, 0, 10, 4, 7, 3]);