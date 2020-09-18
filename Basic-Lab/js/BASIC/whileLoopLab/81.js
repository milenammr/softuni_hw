function grades (input){
    let name = input.shift();
    let counter = 0;
    let average = 0;
    let bad = 0;
    while (counter < input.length){
        let grade = +input[counter];
        if (grade >= 4){
            average += grade;
        } else {
            bad++;
            if (bad >= 2) {
                console.log(`${name} has been excluded at ${counter} grade`);
                break;
            }
        }
        counter++;
    }
    if (bad < 2){
        console.log(`${name} graduated. Average grade: ${(average / 12).toFixed(2)}`);
    }
    
}
grades (['Mimi',
    '5',
    '6',
    '5',
    '6',
    '5',
    '6',
    '6',
    '2',
    '3'])

grades (['Gosho',
5,
5.5,
6,
5.43,
5.5,
6,
5.55,
5,
6,
6,
5.43,
5])