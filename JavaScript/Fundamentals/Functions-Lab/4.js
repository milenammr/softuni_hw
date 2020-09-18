function orders(product, quantity) {
    let price = 0;
    let sum = 0;
    switch (product) {
        case 'coffee':
            price = 1.50;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'water':
            price = 1.00;
            break;
        case 'snacks':
            price = 2.00;
            break;
    }
    sum = price * quantity;
    console.log(sum.toFixed(2));
}
orders('coffee', 2);