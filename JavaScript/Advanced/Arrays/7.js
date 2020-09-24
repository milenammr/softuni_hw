function solve(matrix){
    let newArr = [];
    for (let i of matrix){
        let max = Math.max(...i);
        newArr.push(max);
    }
    console.log(Math.max(...newArr));
}
solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )