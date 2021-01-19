function solve(arr) {
    let even = '';
    for (let i = 0; i < arr.length; i += 2){
        even += arr[i] + ' ';
    }
    console.log(even);
}

solve(['5', '10']);