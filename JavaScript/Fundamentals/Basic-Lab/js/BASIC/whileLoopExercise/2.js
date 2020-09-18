function exam(input) {

    let numGrade = +input.shift();
    let counter = 0;
    let numTasks = 0;
    let task = input.shift();
    let grade = +input.shift();
    let average = 0;
    let lastProblem;

    while (task !== 'Enough') {

        if (grade <= 4) {

            counter++;

        }

        if (counter === numGrade) {

            console.log(`You need a break, ${numGrade} poor grades.`)

            break;
        }
        
        lastProblem = task;
        average = average + grade;
        task = input.shift();
        grade = +input.shift();
        ++numTasks;

    }

    if (task === 'Enough') {

        console.log(`Average score: ${(average / numTasks).toFixed(2)}`);
        console.log(`Number of problems: ${numTasks}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}

exam([
    '4', 'Stone Age',
    '5', 'Freedom',
    '5', 'Storage',
    '3', 'Enough',
    ''
]

)