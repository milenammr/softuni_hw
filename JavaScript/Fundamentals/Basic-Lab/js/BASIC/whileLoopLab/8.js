function grades (input){

    let name = input.shift();
    let yearCounter = 0;
    let average = 0;
    let badGrade = 0;
    

    while (yearCounter < 12){

        let grade = +input.shift();

        if (grade < 4){

            badGrade++;

            if (badGrade === 2){

                console.log(`${name} has been excluded at ${yearCounter} grade`);
                break;
            }

        } else {

            average = average + grade;
            

        }

        
        yearCounter++

    }
    
    if (yearCounter === 12){
        console.log(`${name} graduated. Average grade: ${(average / 12).toFixed(2)}`);
    }
        
}
    
    


grades ([
    'Gosho', '5',    '5.5',
    '6',     '5.43', '5.5',
    '6',     '5.55', '5',
    '6',     '6',    '5.43',
    '5'
  ]
  
  )