function steps (input){
let steps = input.shift();
let allSteps = 0;

while (allSteps <= 10000){

    allSteps += +steps;
    if (allSteps >= 10000){        
        break;
    }
    steps = input.shift();
    if (steps === 'Going home'){
        steps = +input.shift();
        allSteps += steps;
        break;
    }
}
if (allSteps < 10000){
    console.log(`${10000 - allSteps} more steps to reach goal.`);
} else {
    console.log('Goal reached! Good job!');
}
}
steps ([
'1000',
'1500',
'2000',
'6500',
])

// steps([
// '1500',
// '300',
// '2500',
// '3000',
// 'Going home',
// '200',
// ])

// steps ([
// '1500',
// '3000',
// '250',
// '1548',
// '2000',
// 'Going home',
// '2000',
// ])

// steps ([
// '    125',
// '    250',
// '    4000',
// '    30',
// '    2678',
// '    4682    ',
// ])