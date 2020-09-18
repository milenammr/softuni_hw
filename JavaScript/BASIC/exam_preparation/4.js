function bus (input){
    let numStart = +input.shift();
    let numStops = +input.shift();
    let stop = 0;
    let all = 0;
    let numOut;
    let numIn;
    let allOut = 0;
    let allIn = 0;
    for (let i = 1; i <= numStops; i++){
        numOut = +input.shift();
        numIn = +input.shift();
        allOut += numOut;
        allIn += numIn;
    }
    stop = numStart - allOut + allIn;
    if (numStops % 2 == 0){
        console.log(`The final number of passengers is : ${stop}`);
    } else {
        console.log(`The final number of passengers is : ${stop + 2}`);
    }
    

}
// bus ([
// '    20',
// '    2',
// '    10',
// '    5',
// '    5',
// '    3    ',
// ])

bus ([
'    17',
'    3',
'    6',
'    7',
'    8',
'    9',
'    3',
'    4',
])