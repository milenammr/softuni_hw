function solve(arr){
    let even = [];
    for (let i in arr){
       if (i % 2 == 0){
           even.push(arr[i]); 
       } 
    }
    console.log(even.join(' '));
}
solve(['20', '30', '40'])