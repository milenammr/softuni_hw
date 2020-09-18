function lili (input) {
    let age = +input[0];
    let washingPrice = +input[1];
    let toyPrice = +input[2];
    let sum = 0;
    let toyNum = 0;
    let counter = 1;
    for (let i = 1; i <= age; i++){
        if (i % 2 === 0) {
            
            sum += 10 * counter;
            counter++;
        } else {
            toyNum++;
        }
    }
    let sum2 = toyNum * toyPrice;
    let result = washingPrice - ((sum - (counter - 1)) + sum2);
    if (result <= 0) {
        console.log(`Yes! ${Math.abs(result).toFixed(2)}`);
    } else {
        console.log(`No! ${Math.abs(result).toFixed(2)}`);
    }
}
lili([ '21', '1570.98', '3' ])