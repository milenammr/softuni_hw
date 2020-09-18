function booster(input) {
    let fruit = input.shift();
    let size = input.shift();
    let numOfSets = +input.shift();
    let price = 0;
    let sum = 0;
    switch (fruit) {
        case "Watermelon":
            switch (size) {
                case 'small':
                    price = 2 * 56;
                    break;
                case 'big':
                    price = 5 * 28.70;
                    break;
            }
            break;
        case 'Mango':
            switch (size) {
                case 'small':
                    price = 2 * 36.66;
                    break;
                case 'big':
                    price = 5 * 19.60;
                    break;
            }
            break;
        case "Pineapple":
            switch (size) {
                case 'small':
                    price = 2 * 42.10;
                    break;
                case 'big':
                    price = 5 * 24.80;
                    break;
            }
            break;
        case "Raspberry":
            switch (size) {
                case 'small':
                    price = 2 * 20;
                    break;
                case 'big':
                    price = 5 * 15.20;
                    break;
            }
            break;
    }
    sum = numOfSets * price;
    if (sum >= 400 && sum <= 1000){
        sum = sum - (sum * 0.15);
    } else if (sum > 1000){
        sum = sum - (sum * 0.5);
    }
    console.log(`${sum.toFixed(2)} lv.`);
}
booster([
    'Watermelon',
    'big',
    '    4    ',
])

booster([
'Mango',
'big',
'    8',
])

