function budget(input) {
    let moneyForTrip = +input.shift();
    let budget = +input.shift();
    let counter = 0;
    let flag = false;
    let days = 0;
    while (input.length !== 0) {
        let action = input.shift();
        let sum = +input.shift();
        switch (action) {
            case 'spend':
                budget -= sum;
                if (budget < 0){
                    budget = 0;
                }
                counter++;
                if (counter === 5){
                    flag = true;                    
                }
                break;
            case 'save':
                budget += sum;
                break;
        }
    days++;
    if (flag === true){
        break;
    }
    }
    if (flag === true || budget < moneyForTrip){
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    } else if (budget >= moneyForTrip){
        console.log(`You saved the money for ${days} days.`);
    }
}
// budget([
//     '2000',
//     '1000',
//     'spend',
//     '1200',
//     'save',
//     '2000',
// ])

// budget([
// '110',
// '60',
// 'spend',
// '10',
// 'spend',
// '10',
// 'spend',
// '10',
// 'spend',
// '10',
// 'spend',
// '10',
// ])

budget([
'250',
'150',
'spend',
'50',
'spend',
'50',
'save',
'100',
'save',
'100',
])