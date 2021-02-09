function solve(n1, n2){
    let arr1 = [];
    let arr2 = [];
    let have = [];
    for (let i = 1; i <= n1; i++){
        if(n1 % i == 0){
            arr1.push(i);
        }
    }
    for (let i = 1; i <= n2; i++){
        if(n2 % i == 0){
            arr2.push(i);
        }
    }
    arr1.reverse().forEach(el => {
        if (arr2.includes(el)){
            have.push(el);
        }
    })
    console.log(Math.max(...have));
    
}

solve(15, 5)
solve(2154, 458)