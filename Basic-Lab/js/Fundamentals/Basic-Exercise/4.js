function vacantion (people, type, day){
    let price;
    switch (type){
        case 'Students':
            switch (day){
                case 'Friday':
                    price = 8.45;
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (day){
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
            }
            break;
        case 'Regular':
            switch (day){
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.50;
                    break;
            }          
            break;
    }
    let sum = people * price;
    if (type === 'Students'){
        if (people >= 30){
            sum -= (sum *= 0.15);
        }
    }
    if (type === 'Business'){
        if (people >= 100){
            sum -= (10 * price);
        }
    }
    if (type === 'Regular'){
        if (people >= 10 && people <= 20){
            sum -= (sum *= 0.05);
        }
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}
vacantion(40,
    "Regular",
    "Saturday"
    
    )