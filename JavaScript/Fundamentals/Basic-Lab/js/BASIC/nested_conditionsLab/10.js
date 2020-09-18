function sales (input){

    let days = Number(input.shift()) - 1;
    let room = input.shift();
    let rating = input.shift();

    let priceForNights;
    let discount;
    switch (room){
        case 'room for one person':

            priceForNights = days * 18;

            if (days < 10){
                discount = priceForNights;

            } else if (days >= 10 && days <= 15){
                discount = priceForNights;

            } else if (days > 15){
                discount = priceForNights;

            } 

        ;break;

        case 'apartment':

            priceForNights = days * 25;

            if (days < 10){
                discount = priceForNights - (priceForNights * 0.30);
            } else if (days >= 10 && days <= 15){
                discount = priceForNights - (priceForNights *0.35);
            } else if (days > 15){
                discount = priceForNights - (priceForNights *0.50);
            }

        ;break;

        case 'president apartment':

            priceForNights = days * 35;

            if (days < 10){
                discount = priceForNights - (priceForNights * 0.10);
            } else if (days >= 10 && days <= 15){
                discount = priceForNights - (priceForNights *0.15);
            } else if (days > 15){
                discount = priceForNights - (priceForNights *0.20);
            }
           

        ;break;

        
    }

    switch (rating){
        
        case 'positive':
        let promo = discount * 0.25;
        console.log((discount + promo).toFixed(2));
        ;break;
        case 'negative': 
        let promo2 = discount * 0.10;
        console.log((discount - promo2).toFixed(2));
        ;break;
    }
    
}

sales ([30, 'president apartment', 'negative'])