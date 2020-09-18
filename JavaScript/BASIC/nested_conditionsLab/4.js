function shop (input){

    let product = input.shift();
    let city = input.shift();
    let quantity = Number(input.shift());

    let price;
    
    switch (city){
        case 'Sofia':
            switch (product){
                case 'coffee': price = 0.50; break;
                case 'water': price = 0.80; break;
                case 'beer': price = 1.20; break;
                case 'sweets': price = 1.45; break;
                case 'peanuts': price = 1.60; break;
            };
            break;
        case 'Plovdiv':
            switch (product){
                case 'coffee': price = 0.40; break;
                case 'water': price = 0.70; break;
                case 'beer': price = 1.15; break;
                case 'sweets': price = 1.30; break;
                case 'peanuts': price = 1.50; break;
            };
            break;
        case 'Varna': 
        switch (product){
            case 'coffee': price = 0.45; break;
            case 'water': price = 0.70; break;
            case 'beer': price = 1.10; break;
            case 'sweets': price = 1.35; break;
            case 'peanuts': price = 1.55; break;
        };
        break;
    }

    console.log(price * quantity);
}

shop(['sweets', 'Sofia', '2.23'])