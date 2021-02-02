function solve(arr) {
    let result = [];
    let asc = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length / 2; i++){
        if (i != asc.length - 1 - [i]){
            result.push(asc[i]); 
            result.push(asc[asc.length - 1 - [i]]);
        } else {
            result.push(asc[i]);
        }
    }
    return result;
    
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, ])