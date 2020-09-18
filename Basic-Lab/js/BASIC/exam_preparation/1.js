function trip (input){
    let moneyForFood = +input.shift();
    let moneyForSouvenirs = +input.shift();
    let moneyForHotel = +input.shift();
    let sumForFoodSouvenirs = (moneyForFood * 3) + (moneyForSouvenirs * 3);
    let gas = 420 / 100 * 7;
    let sumForGas = (gas * 1.85);
    let forFirst = moneyForHotel - (moneyForHotel * 0.1);
    let forSecond = moneyForHotel - (moneyForHotel * 0.15);
    let forThird = moneyForHotel - (moneyForHotel * 0.2);
    let sum = sumForFoodSouvenirs + sumForGas + forFirst + forSecond + forThird; 
    console.log(`Money needed: ${sum.toFixed(2)}`);
}
trip ([
'200',
'200',
'1000',
])