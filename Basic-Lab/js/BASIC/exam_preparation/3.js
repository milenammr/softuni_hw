function sushi(input) {
    let sushiKind = input.shift();
    let nameOfTheRestourant = input.shift();
    let numberSets = +input.shift();
    let service = input.shift();
    let sashimi;
    let maki;
    let uramaki;
    let temaki;
    let flag = false;
    switch (nameOfTheRestourant) {
        case "Sushi Zone":
            switch (sushiKind) {
                case "sashimi": sashimi = 4.99;
                    sushiKind = sashimi;
                    break;
                case "maki": maki = 5.29;
                    sushiKind = maki;
                    break;
                case "uramaki": uramaki = 5.99;
                    sushiKind = uramaki;
                    break;
                case "temaki": temaki = 4.29;
                    sushiKind = temaki;
                    break;
            }
            break;
        case "Sushi Time":
            switch (sushiKind) {
                case "sashimi": sashimi = 5.49;
                    sushiKind = sashimi;
                    break;
                case "maki": maki = 4.69;
                    sushiKind = maki;
                    break;
                case "uramaki": uramaki = 4.49;
                    sushiKind = uramaki;
                    break;
                case "temaki": temaki = 5.19;
                    sushiKind = temaki;
                    break;
            }
            break;
        case "Sushi Bar":
            switch (sushiKind) {
                case "sashimi": sashimi = 5.25;
                    sushiKind = sashimi;
                    break;
                case "maki": maki = 5.55;
                    sushiKind = maki;
                    break;
                case "uramaki": uramaki = 6.25;
                    sushiKind = uramaki;
                    break;
                case "temaki": temaki = 4.75;
                    sushiKind = temaki;
                    break;
            }           
            break;
        case "Asian Pub":
            switch (sushiKind) {
                case "sashimi": sashimi = 4.50;
                    sushiKind = sashimi;
                    break;
                case "maki": maki = 4.80;
                    sushiKind = maki;
                    break;
                case "uramaki": uramaki = 5.50;
                    sushiKind = uramaki;
                    break;
                case "temaki": temaki = 5.50;
                    sushiKind = temaki;
                    break;
            }                      
            break;
        default:
            console.log(`${nameOfTheRestourant} is invalid restaurant!`);
            flag = true;
            break;
    }

    let sum = numberSets * sushiKind;
    let delivery = sum * 0.2;
    if (service == 'Y' && flag == false){
        console.log(`Total price: ${Math.ceil(sum + delivery)} lv.`);
    } else if (flag == false){
        console.log(`Total price: ${Math.ceil(sum)} lv.`);
    }
}
sushi([
    'maki',
    'Sushi Zone',
    '4',
    'Y',
])
// sushi ([
// 'sashimi',
// 'SASA',
// '10',
// 'Y',
// ])