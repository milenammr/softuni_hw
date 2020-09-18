function twoSmallestNumber(arr){
    let sorted = arr.sort((a, b) => a - b);
    sorted = arr.slice(0, 2);
    console.log(sorted.join(' '));
}
twoSmallestNumber([30, 15, 50, 5])