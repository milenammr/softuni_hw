function solve(arr){
    console.log (arr[0]);
    arr.reduce(function(acc, el) {
        if (acc <= el){
            console.log(el); 
            return acc = el;
        }
        return acc;
    });
}
solve([1, 
    2, 
    3,
    4]
    
    )