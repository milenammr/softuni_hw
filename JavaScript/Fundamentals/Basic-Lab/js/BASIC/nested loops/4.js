function sumOfTwo(input) {
    let a = +input.shift();
    let b = +input.shift();
    let c = +input.shift();
    let counter = 0;
    let flag = false;
    let counterAll = 0;
    for (let i = a; i <= b; i++) {
        for (let z = a; z <= b; z++) {
            counter++;
            if (i + z == c) {               
                console.log(`Combination N:${counter} (${i} + ${z} = ${c})`);
                flag = true;
            } 
            
        }
        counterAll++;
        if (flag == true){
            break;
        }       
    } 
    if (flag == false){
        console.log(`${counter} combinations - neither equals ${c}`);
    }  
}
// sumOfTwo([
//     '1',
//     '10',
//     '5',
// ])

// sumOfTwo([
// '23',
// '24',
// '20',
// ])

sumOfTwo ([
'    88',
'    888',
'    2000      ',
])