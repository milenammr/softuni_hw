function steps (input) {
 let steps;
 let goal = 0;
 while (goal <= 10000) {
     steps = input.shift();
     
     if (steps === 'Going home') {
        steps = +input.shift();
        goal += steps;
        if (goal >= 10000) {
            console.log (`Goal reached! Good job!`)
            break;
        } else {
            console.log (`${10000 - goal} more steps to reach goal.`)
            break;
        }
        
     } else {
        steps =Number(steps);
        goal += steps;
     }
     if (goal >= 10000) {
        console.log (`Goal reached! Good job!`)
     }
 }
}

steps ([ '1000', '1500', '2000', '6500', '' ]



)