function solve(matrix) {
    let newArr = [];
    for (let i of matrix){
        newArr = newArr.concat(i);
    }
    return Math.max(...newArr)
    //console.log(max);
}

solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )

// function solve(matrix) {
//     let min = Number.MIN_SAFE_INTEGER
//     for (let i = 0; i < matrix.length; i++) {
//         for (let k = 0; k < matrix[i].length; k++) {
//             min = min < matrix[i][k] ? matrix[i][k] : min;   
//         }
//     }
//     console.log(min);
// }