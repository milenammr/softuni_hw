function exam (input){
    let startPoint = +input.shift();
    let sector = input.shift();
    let points;
    let counter = 0;
    while (sector != "bullseye") {
        counter++;
        points = +input.shift();
        if (sector == 'double ring'){
            points *= 2;
        } else if (sector == 'triple ring'){
            points *= 3;
        } 
        startPoint -= points;
        if (startPoint <= 0){
            break;
        } 
        sector = input.shift();
    }
    if (sector == "bullseye"){
        counter++;
        console.log(`Congratulations! You won the game with a bullseye in ${counter} moves!`);
    } else if (startPoint == 0) {
        console.log(`Congratulations! You won the game in ${counter} moves!`);
    } else if (startPoint < 0) {
        console.log(`Sorry, you lost. Score difference: ${Math.abs(startPoint)}.`);
    }
}
// exam ([
// '    150',
// 'double ring',
// '    20',
// 'triple ring',
// '    10',
// 'number section',
// '    20',
// 'triple ring',
// '    20',
// ])

// exam ([
// '    101',
// 'triple ring',
// '7',
// 'double ring',
// '19',
// 'bullseye',
// ])

exam ([
'75',
'triple ring',
'17',
'number section',
'16',
'triple ring',
'13',
'double ring',
'10',
])