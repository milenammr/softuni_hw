function sort(arr){
    let arr2 = [];
    for (let num of arr){
        num >= 0 ? arr2.push(num) : arr2.unshift(num);
    }
    for (let num of arr2){
        console.log(num);
    }
}
sort([3, -2, 0, -1]);