function solve (n1, n2){
    let sum = 0;
    for (let i = Number(n1); i <= Number(n2); i++){
        sum += i;
    }
    console.log(sum);
}
solve ('-8', '20');