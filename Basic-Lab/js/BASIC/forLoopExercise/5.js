function devide (input){
let n = +input.shift();
let c1 = 0;
let c2 = 0;
let c3 = 0;
for (let i = 0; i < n; i ++){
    let n2 = +input.shift();
    if (n2 % 2 === 0){
        c1++;
    } 
    if (n2 % 3 === 0){
        c2++;
    } 
    if (n2 % 4 === 0){
        c3++;
    }
}
let p1 = c1 / n * 100;
let p2 = c2 / n * 100;
let p3 = c3 / n * 100;
console.log(`${p1.toFixed(2)}%`);
console.log(`${p2.toFixed(2)}%`);
console.log(`${p3.toFixed(2)}%`);
}
devide ([3,3,6,9])