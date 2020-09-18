function flowers(input) {
    let flowers = input.shift();
    let number = +input.shift();
    let budget = +input.shift();
    let price;
    let sum;
    let discount;
    switch (flowers) {
        case 'Roses':
            price = 5;
            discount = 0.1;
            sum = number * price;
            if (number > 80) {
                sum -= sum * discount;
            } else {
                sum;
            }
            break;
        case 'Dahlias':
            price = 3.80;
            discount = 0.15;
            sum = number * price;
            if (number > 90) {
                sum -= sum * discount;
            } else {
                sum;
            }
            break;
        case 'Tulips':
            price = 2.80;
            discount = 0.15;
            sum = number * price;
            if (number > 80) {
                sum -= sum * discount;
            } else {
                sum;
            }
            break;
        case 'Narcissus':
            price = 3;
            discount = 0.15;
            sum = number * price;
            if (number < 120) {
                sum += sum * discount;
            } else {
                sum;
            }
            break;
        case 'Gladiolus':
            price = 2.50;
            discount = 0.2;
            sum = number * price;
            if (number < 80) {
                sum += sum * discount;
            } else {
                sum;
            }
            break;
    }

    if (budget >= sum) {
        console.log(`Hey, you have a great garden with ${number} ${flowers} and ${(budget - sum).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(budget - sum).toFixed(2)} leva more.`);
    }
}
flowers(['Tulips',
    '88',
    '260'])