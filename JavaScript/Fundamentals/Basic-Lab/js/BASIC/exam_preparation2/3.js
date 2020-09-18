function ship(input) {
    let kruis = input.shift();
    let room = input.shift();
    let nights = +input.shift();
    let standard = 0;
    let balkony = 0;
    let apartment = 0;
    switch (kruis) {
        case "Mediterranean":
            switch (room) {
                case "standard cabin": room = standard = 27.50;
                    break;
                case "cabin with balcony": room = balkony = 30.20;
                    break;
                case "apartment": room = apartment = 40.50;
                    break;
            }
            break;
        case "Adriatic":
            switch (room) {
                case "standard cabin": room = standard = 22.99;
                    break;
                case "cabin with balcony": room = balkony = 25.00;
                    break;
                case "apartment": room = apartment = 34.99;
                    break;
            }
            break;
        case "Aegean":
            switch (room) {
                case "standard cabin": room = standard = 23.00;
                    break;
                case "cabin with balcony": room = balkony = 26.60;
                    break;
                case "apartment": room = apartment = 39.80;
                    break;
            }
            break;
    }
    let sum = 4 * room * nights;
    if (nights > 7){
        console.log(`Annie's holiday in the ${kruis} sea costs ${(sum - (sum * 0.25)).toFixed(2)} lv.`);
    } else {
        console.log(`Annie's holiday in the ${kruis} sea costs ${sum.toFixed(2)} lv.`);
    }
}
ship ([
'Mediterranean',
'cabin with balcony',
'    12',
])