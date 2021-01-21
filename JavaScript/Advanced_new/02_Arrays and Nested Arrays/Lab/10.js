function solve(matrix) {
    let mainDiag = 0;
    let secDiag = 0;

    for (let i = 0; i < matrix.length; i++){
        mainDiag += matrix[i][i];
        secDiag += matrix[i][matrix.length - 1 - i];
    }
    return `${mainDiag} ${secDiag}`
}

solve ([
    [20, 40],
    [10, 60]]
   
)

solve(
    [[3, 5, 17],
 [-1, 7, 14],
 [1, -8, 89]]

)