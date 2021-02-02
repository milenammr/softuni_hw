function solve(arr) {
    let result = [];
    arr.reduce(function(acc, curr, i, arr) {
        if (acc <= curr){
            result.push(curr);
            acc = curr;
        };
        return acc;
    }, 0)
    return result;
}

solve([1, 2, 3, 4]
    
    
    
    
    
    
    )