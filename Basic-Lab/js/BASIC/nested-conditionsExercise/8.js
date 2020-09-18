function hotel(input) {
    let month = input.shift();
    let nights = +input.shift();
    let studio;
    let flat;
    let discountStudio = 0;
    let discountFlat = 0;
    switch (month) {
        case 'May':
        case 'October':
            studio = 50;
            flat = 65;
            if (nights >= 7 && nights <= 14) {
                discountStudio = studio * nights * 0.05;
            } else {
                discountStudio = studio * nights * 0.3;
                discountFlat = flat * nights * 0.1;
            }
            break;
        case 'June':
        case 'September':
            studio = 75.20;
            flat = 68.70;
            if (nights > 14) {
                discountStudio = studio * nights * 0.2;
                discountFlat = flat * nights * 0.1;
            }
            break;
        case 'July':
        case 'August':
            studio = 76;
            flat = 77;
            if (nights > 14) {
                discountFlat = flat * nights * 0.1;
            }
            break;

    }
    console.log(`Apartment: ${(nights * flat - discountFlat).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studio - discountStudio).toFixed(2)} lv.`);
}
hotel(['August', '14'])