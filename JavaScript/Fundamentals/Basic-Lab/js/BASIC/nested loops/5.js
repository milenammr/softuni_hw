function travel (input){
    let destination = input.shift();
    let sum = 0;
    while (destination !== 'End'){
        let budget = +input.shift();
        let save = +input.shift();
        while (sum <= budget){                      
            sum += save;
            if (sum >= budget){
            console.log(`Going to ${destination}!`); 
            break;          
            }
            save = +input.shift();   
        }
        destination = input.shift();
        sum = 0;
    }
}
// travel ([
// 'Greece',
// '    1000',
// '    200',
// '    200',
// '    300',
// '    100',
// '    150',
// '    240',
// 'Spain',
// '    1200',
// '    300',
// '    500',
// '    193',
// '    423',
// 'End',
// ])

travel ([
'France',
'    2000',
'    300',
'    300',
'    200',
'    400',
'    190',
'    258',
'    360',
'Portugal',
'    1450',
'    400',
'    400',
'    200',
'    300',
'    300',
'Egypt',
'    1900',
'    1000',
'    280',
'    300',
'    500',
'Sofia',
'    3000',
'    1000',
'    280',
'    300',
'    500',
'600',
'100',
'1000',
'End',
])