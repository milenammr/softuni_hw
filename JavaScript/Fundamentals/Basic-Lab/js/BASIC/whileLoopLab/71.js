function grades (input){

    let name = input.shift();
    let counter = 1;
    let average = 0;

    while (counter <= 12){
        let grade = +input.shift();
        average = average + grade;
        counter ++;
                
    }
    let averageGrade = average / 12;
    if (averageGrade >= 4){
        console.log(`${name} graduated. Average grade: ${(averageGrade).toFixed(2)}`);
    }
        
}

grades ([
    'Ani', '5',    '5.32',
    '6',   '5.43', '5',
    '6',   '5.5',  '4.55',
    '5',   '6',    '5.56',
    '6',   '5'
  ]
  )