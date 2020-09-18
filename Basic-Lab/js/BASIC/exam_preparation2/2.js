function shopping (input){
    let budget = +input.shift();
    let priceTowel = +input.shift();
    let discount = +input.shift();
    let umbrella = (priceTowel * 2) / 3;
    let slippers = umbrella * 0.75;
    let bag = (slippers + priceTowel) / 3;
    let all = priceTowel + umbrella + slippers + bag;
    let sum = all - (all * discount / 100);
    if (budget >= sum){
        console.log(`Annie's sum is ${sum.toFixed(2)} lv. She has ${(budget - sum).toFixed(2)} lv. left.`);
    } else {

        console.log(`Annie's sum is ${sum.toFixed(2)} lv. She needs ${Math.abs(budget - sum).toFixed(2)} lv. more.`);
    }
}
shopping ([
'    25',
'    6',
'    10    ',
])