function number (input) {
let num = +input[0];
let evenmin = Number.MAX_SAFE_INTEGER;
let evenmax = Number.MIN_SAFE_INTEGER;
let oddmin = Number.MAX_SAFE_INTEGER;
let oddmax = Number.MIN_SAFE_INTEGER;
let oddSum = 0;
let evenSum = 0;
for (let i = 1; i <= num; i++) {
    let n = +input[i];
    if (i % 2 === 0) {
        evenSum += n;
        if (n < evenmin){
            evenmin = n;            
        } 
        if (n > evenmax){
            evenmax = n;
        }
    } else {
        oddSum += n;
        if (n < oddmin){
            oddmin = n;            
        } 
        if (n > oddmax){
            oddmax = n;
        }
    }
}

console.log(`OddSum=${oddSum.toFixed(2)},`);
if (oddmin === Number.MAX_SAFE_INTEGER){
    console.log('OddMin=No,');
} else {
console.log(`OddMin=${oddmin.toFixed(2)},`);
}
if (oddmax === Number.MIN_SAFE_INTEGER){
    console.log('OddMax=No,');
} else {
console.log(`OddMax=${oddmax.toFixed(2)},`);
}
console.log(`EvenSum=${evenSum.toFixed(2)},`);
if (evenmin === Number.MAX_SAFE_INTEGER){
    console.log('EvenMin=No,');
} else {
console.log(`EvenMin=${evenmin.toFixed(2)},`);
}
if (evenmax === Number.MIN_SAFE_INTEGER){
    console.log('EvenMax=No');
} else {
    console.log(`EvenMax=${evenmax.toFixed(2)}`);
}
}
number ([0])
