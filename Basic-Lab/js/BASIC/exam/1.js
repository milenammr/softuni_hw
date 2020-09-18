function change (input){
    let bitcoins = +input.shift();
    let chinaJoans = +input.shift();
    let commision = +input.shift();
    let allBitcoins = bitcoins * 1168;
    let allJoansS = chinaJoans * 0.15;
    let allJoansL = allJoansS * 1.76;
    let all = allBitcoins + allJoansL;
    let euro = all / 1.95;
    let sum = commision * euro / 100;
    let end = euro - sum;
    console.log(end.toFixed(2));

}
change ([
'    20',
'    5678',
'    2.4',
])