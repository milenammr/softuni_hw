function boat(input) {
    let budget = +input.shift();
    let season = input.shift();
    let fishers = +input.shift();
    let price;
    let discount;
    switch (season) {
        case 'Spring':
            price = 3000;
            break;
        case 'Summer':
        case 'Autumn':
            price = 4200;
            break;
        case 'Winter':
            price = 2600;
            break;
    }
    if (fishers <= 6) {
        discount = price * 0.1;

    } else if (fishers <= 11) {
        discount = price * 0.15;

    } else {
        discount = price * 0.25;

    }
    price -= discount;
    if (fishers % 2 == 0 && season !== 'Autumn'){
        price = price - (price * 0.05);
    }

    if (budget >= price) {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget - price).toFixed(2)} leva.`);
    }
}
boat(['3000', 'Autumn', '12'])