function solve(arr){
    let n = arr.pop();
    for (let i = 0; i < arr.length; i += Number(n)){
        console.log(arr[i]);
    }
}
solve(['1', 
'2',
'3', 
'4', 
'5', 
'6']


)