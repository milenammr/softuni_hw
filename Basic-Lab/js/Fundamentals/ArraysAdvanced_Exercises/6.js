function solve(arr1, arr2){
    let index = arr1.indexOf(arr2[0]);
    let detonated;
    while (index >= 0){
        if (index - arr2[1] < 0){
            detonated = arr1.splice(0, index + arr2[1] + 1);
            //arr1 = detonated;
        } else {
            detonated = arr1.splice(index - arr2[1], arr2[1] + arr2[1] + 1);
        }
        index = arr1.indexOf(arr2[0]);
    }
    let result = 0;
    for (let i of arr1){
        result += i;
    }
    console.log(result);
}
solve([2, 1, 1, 2, 1, 1],
    [2, 1])