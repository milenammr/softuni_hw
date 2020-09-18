function num(input) {
    let n = input.shift();
    let sumPrime = 0;
    let sumNonPrime = 0;
    let count = 0;
    
    while (n !== 'stop') {
        n = +n;
        
        if (n < 0) {
            console.log('Number is negative.');
            n = input.shift();
            continue;
        }
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++
            }
            // } else {
            //     primeCount++
            // }
        }
        if (count == 2) {
            sumPrime += n;
        } else {
            sumNonPrime += n;
        }
        count = 0;
        n = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}
// num([
//     '    3',
//     '    9',
//     '    0',
//     '    7',
//     '    19',
//     '    4',
//     'stop',
// ])

num ([
'    30',
'83',
'33',
'-1',
'20',
'stop',
]) 