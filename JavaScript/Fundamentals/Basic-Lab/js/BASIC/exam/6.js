function christmas(input) {
    let days = +input.shift();
    let sport;
    let result;
    let sum = 0;
    let all = 0;
    let finalsum = 0;
    let wincounter = 0;
    let loosecounter = 0;
    let daywin = 0;
    let dayloose = 0;
    for (let i = 0; i < days; i++) {
        sport = input.shift();
        while (sport !== 'Finish') {
            result = input.shift();
            if (result == 'win') {
                wincounter++;
                sum += 20;
            } else {
                loosecounter++;
            }
            sport = input.shift();
        }
        if (wincounter > loosecounter) {
            sum = sum + (sum * 0.1);
            daywin++;
        } else {
            dayloose++;
        }
        wincounter = 0;
        loosecounter = 0;
        all = sum;
        sum = 0;
        finalsum += all;
    }
    if (daywin > dayloose) {
        finalsum = finalsum + (finalsum * 0.2)
        console.log(`You won the tournament! Total raised money: ${finalsum.toFixed(2)}`);
    } else {

        console.log(`You lost the tournament! Total raised money: ${finalsum.toFixed(2)}`);
    }
}
christmas([
    '    2',
    'volleyball',
    'win',
    'football',
    'lose',
    'basketball',
    'win',
    'Finish',
    'golf',
    'win',
    'tennis',
    'win',
    'badminton',
    'win',
    'Finish',
])

christmas ([
'    3',
'darts',
'lose',
'handball',
'lose',
'judo',
'win',
'Finish',
'snooker',
'lose',
'swimming',
'lose',
'squash',
'lose',
'table tennis',
'win',
'Finish',
'volleyball',
'win',
'basketball',
'win',
'Finish',
])

