function grades (input){

    let name = input.shift();
    let counter = 0;
    let average = 0;
    

    while (counter < input.length) {
        let grade = +input[counter];
        if (grade >= 4){
            average += grade;
            
        } 
        counter ++; 
        if (counter > 11){
            break;
        }      
    }
    
    
    console.log(`${name} graduated. Average grade: ${(average / 12).toFixed(2)}`);
    
}

grades ([
    'Ani', '5',    '5.32',
    '6',   '5.43', '5',
    '6',   '5.5',  '4.55',
    '5',   '6',    '5.56',
    '6', '5'  
  ]
  )