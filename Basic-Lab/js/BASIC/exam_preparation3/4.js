function shop (input){
    let budget = +input.shift();
    let product = input.shift();
    let counter = 0;
    let counter2 = 0;
    let sum = 0;
    let price = 0;
    while (product !== 'Stop'){
        counter++;
        price = +input.shift();
        if (price > budget){
            break;
        }
        if (counter == 3){
            price /= 2;
            counter = 0;
        }
        counter2++;
        sum += price;
        budget -= price;
        product = input.shift();
    }
    //budget -= sum;
    if (price > budget){
        console.log("You don't have enough money!");
        console.log(`You need ${Math.abs(budget - price).toFixed(2)} leva!`);
    } else {

        console.log(`You bought ${counter2} products for ${sum.toFixed(2)} leva.`);
    }
}
shop([
'    153.20',
'Backpack',
'25.20',
'Shoes',
'54',
'Sunglasses',
'30',
'Stop',
])

shop ([
'    54',
'Thermal underwear',
'24',
'Sunscreen',
'45',
])

shop([
    '    153.20',
    'Backpack',
    '25.20',
    'Shoes',
    '54',
    'Sunglasses',
    '30',
    'Sunglasses',
    '58',
    
    'Stop'
    ])