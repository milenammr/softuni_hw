function loaded (input) {
    let bagajnik = +input.shift();
    let switcase = input.shift();
    let counter = 1;
    while (switcase !== 'End'){
        switcase = +switcase;
        if (counter == 3){
            switcase += (switcase *= 0.1);
        }
        bagajnik -= switcase;
        if (bagajnik <= 0){
            break;
        }
        counter++;
        switcase = input.shift();
    }
    if (bagajnik >= 0){
        console.log("Congratulations! All suitcases are loaded!");
        console.log(`Statistic: ${counter - 1} suitcases loaded.`);
    } else {
        console.log("No more space!");
        console.log(`Statistic: ${counter - 1} suitcases loaded.`);
    }
    
}
loaded ([
'550',
'100',
'252',
'72',
'End',
])

loaded ([
'    700.5',
'    180',
'    340.6',
'    126',
'    220   ',
])

loaded ([
'    1200.2',
'260',
'380.5',
'125.6',
'305',
'End',
])