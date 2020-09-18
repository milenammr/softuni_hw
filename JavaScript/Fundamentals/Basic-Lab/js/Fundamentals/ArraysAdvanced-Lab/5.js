function oddNumbers(arr){
    // for (let i = 1; i < arr.length; i += 2){
    //     arr.splice(i, i, arr[i] * 2);
    // }
    let arr2 = arr;
    arr2 = arr2.filter((num, i) => i % 2 != 0);
    arr2 = arr2.map(x => 2 * x);
    console.log(arr2.reverse().join(' '));
}
oddNumbers([10, 15, 20, 25])