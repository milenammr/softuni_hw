function cinema (input){

    let type = input.shift();
    let r = Number(input.shift());
    let c = Number(input.shift());
    let numberOfPeople = r * c;
    let priceTiket;

    switch (type){
        case 'Premiere':
            priceTiket = 12.00;
            break;
        case 'Normal':
            priceTiket = 7.50;
            break;
        case 'Discount':
            priceTiket = 5.00;
            break;
    }

    console.log(`${(numberOfPeople * priceTiket).toFixed(2)} leva`)
}

cinema (['Premiere', 10, 12])