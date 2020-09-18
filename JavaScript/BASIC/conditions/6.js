function film (input){

    let budget = Number(input.shift());
    let statisti = Number(input.shift());
    let priceForOneCostume = Number(input.shift());

    let decor = budget * 0.1;
    let price = statisti * priceForOneCostume;


    if (statisti > 150){

        let discount = price * 0.1;
        price -= discount;

    }

    let sum = budget - decor - price;

    if (sum >= 0){

        console.log('Action!');
        console.log(`Wingard starts filming with ${sum.toFixed(2)} leva left.`);

    } else {

        console.log('Not enough money!');
        console.log(`Wingard needs ${Math.abs(sum).toFixed(2)} leva more.`);
    }
    

}

film ([9000, 150, 55.5])