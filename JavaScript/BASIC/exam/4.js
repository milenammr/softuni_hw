function trecking (input){
    let numGroups = +input.shift();
    let numOfPeople;
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let all = 0;
    for (let i = 0; i < numGroups; i++){
        numOfPeople = +input.shift();
        if (numOfPeople <= 5){
            musala += numOfPeople;
        } else if (numOfPeople <= 12){
            monblan += numOfPeople;
        } else if (numOfPeople <= 25){
            kilimanjaro += numOfPeople;
        } else if (numOfPeople <= 40) {
            k2 += numOfPeople;
        } else {
            everest += numOfPeople;
        }
        all += numOfPeople;
    }

    console.log(`${(musala / all * 100).toFixed(2)}%`);
    console.log(`${(monblan / all * 100).toFixed(2)}%`);
    console.log(`${(kilimanjaro / all * 100).toFixed(2)}%`);
    console.log(`${(k2 / all * 100).toFixed(2)}%`);
    console.log(`${(everest / all * 100).toFixed(2)}%`);
}
trecking ([
'    10',
'    10',
'    5',
'    1',
'    100',
'    12',
'    26',
'    17',
'    37',
'    40',
'    78    ',
])