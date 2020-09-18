function baking(input) {
    let numOfPeople = +input.shift();
    let name;
    let kindOfsweet;
    let numBakeSweet;
    let allCookies = 0;
    let allCakes = 0;
    let allWaffles = 0;
    let all = 0;
    let sum = 0;
    let price;
    for (let i = 0; i < numOfPeople; i++) {
        name = input.shift();
        kindOfsweet = input.shift();
        while (kindOfsweet !== 'Stop baking!') {
            let numBakeSweet = +input.shift();
            switch (kindOfsweet) {
                case 'cookies':
                    allCookies += numBakeSweet;
                    price = 1.5 * numBakeSweet;
                    break;
                case 'cakes':
                    allCakes += numBakeSweet;
                    price = 7.8 * numBakeSweet;
                    break;
                case 'waffles':
                    allWaffles += numBakeSweet;
                    price = 2.3 * numBakeSweet;
                    break;
            }
            sum += price;
            kindOfsweet = input.shift();
        }       
        console.log(`${name} baked ${allCookies} cookies, ${allCakes} cakes and ${allWaffles} waffles.`);
        all += allCakes + allCookies + allWaffles;
        allCookies = 0;
        allCakes = 0;
        allWaffles = 0;
    }
    console.log(`All bakery sold: ${all}`);
    console.log(`Total sum for charity: ${sum.toFixed(2)} lv.`);
}
// baking([
//     '    3',
//     'Iva',
//     'cookies',
//     '    5',
//     'cakes',
//     '    3',
//     'Stop baking!',
//     'George',
//     'cakes',
//     '    7',
//     'waffles',
//     '    2',
//     'Stop baking!',
//     'Ivan',
//     'cookies',
//     '    6',
//     'Stop baking!',
// ])

baking ([
'2',
'Annie',
'cakes',
'3',
'waffles',
'6',
'cookies',
'2',
'Stop baking!',
'Petya',
'waffles',
'8',
'Stop baking!',
])