function exam (input){
    let badGrade = +input.shift();
    let nameOfSubject = input.shift();
    let badGradeCounter = 0;
    let scoreCounter = 0;
    let flag = false;
    let sum = 0;
    let lastSubject;
    while (nameOfSubject !== 'Enough'){
        let score = +input.shift();
        if (score <= 4){
            badGradeCounter++
            if (badGrade === badGradeCounter){
                flag = true;
                break;
            }
        }
        sum += score;
        scoreCounter++;
        lastSubject = nameOfSubject;
        nameOfSubject = input.shift();
    }
    let averageScore = sum / scoreCounter;
    if (flag === true) {
        console.log(`You need a break, ${badGradeCounter} poor grades.`);
    } else {
        console.log(`Average score: ${(averageScore).toFixed(2)}`);
        console.log(`Number of problems: ${scoreCounter}`);
        console.log(`Last problem: ${lastSubject}`);
    }
}
// exam ([
// '3',
// 'Money',
// '6',
// 'Story',
// '4',
// 'Spring Time',
// '5',
// 'Bus',
// '6',
// 'Enough',
// ])

exam ([
'2',
'Income',
'3',
'Game Info',
'6',
'Best Player',
'4',
])