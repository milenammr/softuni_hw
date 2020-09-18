function save (input){
    let budget = +input.shift();
    let numOfMonths = +input.shift();
    let sum = +input.shift();
    let n = budget * 0.3;
    let forJIC = budget - (sum + n);
    console.log(`She can save ${(forJIC / budget * 100).toFixed(2)}%`);
    console.log((forJIC * numOfMonths).toFixed(2));
}
save ([
'2050',
'5',
'900',
])