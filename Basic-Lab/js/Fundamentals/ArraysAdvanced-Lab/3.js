function kNumbers(arr){
    let k = arr.shift();
    let sliced = arr.slice(0, k);
    let sliced2 = arr.slice(arr.length - k);
    let str = '';
    let str2 = '';
    for (let element of sliced){
        str += element + ' ';
    }
    for (let element of sliced2){
        str2 += element + ' ';
    }
    console.log(str);
    console.log(str2);
}
kNumbers([3,
    6, 7, 8, 9]
   
    )