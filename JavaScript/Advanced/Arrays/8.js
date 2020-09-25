function solve(matrix){
    let diag1 = [];
    let diag2 = [];
    let j = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++){
            diag1.push(matrix[i][i]);
            diag2.push(matrix[i][j]);
            j--;
        }
    diag1 = diag1.reduce((a, x) => a += x);
    diag2 = diag2.reduce((a, x) => a += x);
    console.log(`${diag1} ${diag2}`);
}
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )