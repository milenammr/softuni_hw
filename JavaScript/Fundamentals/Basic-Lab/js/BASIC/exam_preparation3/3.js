function mob(input) {
    let srok = input.shift();
    let tipDogowor = input.shift();
    let internet = input.shift();
    let numMonths = +input.shift();
    let taksa = 0;
    let net = 0;
    let sum = 0;
    switch (tipDogowor) {
        case "Small":
            switch (srok) {
                case 'one': taksa = 9.98;
                    break;
                case 'two': taksa = 8.58;
                    break;
            }
            break;
        case "Middle":
            switch (srok) {
                case 'one': taksa = 18.99;
                    break;
                case 'two': taksa = 17.09;
                    break;
            }
            break;
        case "Large":
            switch (srok) {
                case 'one': taksa = 25.98;
                    break;
                case 'two': taksa = 23.59;
                    break;
            }
            break;
        case "ExtraLarge":
            switch (srok) {
                case 'one': taksa = 35.99;
                    break;
                case 'two': taksa = 31.79;
                    break;
            }
            break;
    }
    if (taksa <= 10){
        net = 5.50;
    } else if (taksa <= 30){
        net = 4.35;
    } else {
        net = 3.85;
    }
    if (internet == 'yes'){
        sum = (numMonths * taksa) + (numMonths * net); 
    } else {
        sum = numMonths * taksa;
    }
    if (srok == 'two'){
        sum -= sum * 0.0375
    } 

        console.log(`${sum.toFixed(2)} lv.`);
    
}
mob([
    'two',
    'Large',
    'no',
    '    10    ',
])