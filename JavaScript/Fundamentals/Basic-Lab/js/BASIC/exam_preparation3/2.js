 function safari (input){
let budget = +input.shift();
let litri = +input.shift();
let day = input.shift();
let forGas = litri * 2.10;
let all = forGas + 100;
if (day == 'Sunday'){
    all -= (all * 0.2);
} else {
    all -= (all * 0.1);
}
if (budget - all >= 0){
    console.log(`Safari time! Money left: ${(budget - all).toFixed(2)} lv.`)
} else {
    console.log(`Not enough money! Money needed: ${Math.abs(budget - all).toFixed(2)} lv.`);
}


}
safari ([
'    120',
'    30',
'Saturday',
])