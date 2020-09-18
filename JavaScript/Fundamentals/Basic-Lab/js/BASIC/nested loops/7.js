function tickets(input) {
    let name = input.shift();    
    let standardCounter = 0;
    let studentCounter = 0;
    let kidCounter = 0;
    let forTheFilm = 0;
    let all = 0;
    let allStudent = 0;
    let allStandard = 0;
    let allKid = 0;
    while (name !== 'Finish') {
        let freeSpace = +input.shift();
        let type = input.shift();
        while (type !== 'End') {
            switch (type) {
                case 'standard':
                    standardCounter++
                    break;
                case 'student':
                    studentCounter++;
                    break;
                case 'kid':
                    kidCounter++;
                    break;
            }
            forTheFilm = studentCounter + standardCounter + kidCounter;           
            type = input.shift();
            if (type == 'Finish'){
                break;
            }
        }
        console.log(`${name} - ${((forTheFilm / freeSpace) * 100).toFixed(2)}% full.`);
        all += forTheFilm;
        forTheFilm = 0;
        allStandard += standardCounter;
        standardCounter = 0;
        allStudent += studentCounter;
        studentCounter = 0;
        allKid += kidCounter;
        kidCounter = 0;
        if (type == 'Finish'){
            break;
        }
        name = input.shift(); 
    }
    console.log(`Total tickets: ${all}`);
    console.log(`${((allStudent / all) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((allStandard / all) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((allKid / all) * 100).toFixed(2)}% kids tickets.`);
}
// tickets([
//     'Taxi',
//     '10',
//     'standard',
//     'kid',
//     'student',
//     'student',
//     'standard',
//     'standard',
//     'End',
//     'Scary Movie',
//     '6',
//     'student',
//     'student',
//     'student',
//     'student',
//     'student',
//     'student',
//     'Finish',
// ])

tickets ([
'The Matrix',
'20',
'student',
'standard',
'kid',
'kid',
'student',
'student',
'standard',
'student',
'End',
'The Green Mile',
'17',
'student',
'standard',
'standard',
'student',
'standard',
'student',
'End',
'Amadeus',
'3',
'standard',
'standard',
'standard',
'Finish',
])