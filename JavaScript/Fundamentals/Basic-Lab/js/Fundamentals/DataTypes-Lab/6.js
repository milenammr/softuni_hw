function fuelMoney(distance, passengers, price){
    let fuel = (distance / 100 * 7) + (passengers * 0.1);
    let neededMoney = fuel * price;
    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
fuelMoney(260, 9, 2.49);