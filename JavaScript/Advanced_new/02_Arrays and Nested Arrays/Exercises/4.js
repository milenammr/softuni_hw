function solve(arr, n) {
    let element;
    for (let i = 0; i < n; i++){
        element = arr[arr.length - 1];
        arr.pop()
        arr.unshift(element);
    }
    console.log(...arr);
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)