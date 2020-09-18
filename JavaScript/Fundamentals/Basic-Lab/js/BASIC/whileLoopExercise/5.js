function money (input) {
    let sum = +input.shift() * 100;
    let counter = 0;
    while (Math.floor(sum) > 0) {
        if (sum >= 200){
            sum -= 200;
            counter++;
        } 
        if (sum >= 100) {
            sum -= 100;
            counter++;
        } 
        if (sum >= 50 & sum < 100) {
            sum -= 50;
            counter++;
        } 
        if (sum >= 20 & sum < 50) {
            sum -= 20;
            counter++;
        } 
        if (sum >= 10 & sum < 20) {
            sum -= 10;
            counter++;
        } 
        if (sum >= 05 & sum < 10) {
            sum -= 05;
            counter++;
        } 
        if (sum >= 02 & sum < 5) {
            sum -= 02;
            counter++;
        } 
        if (sum >= 01 & sum < 2) {
            sum -= 01;
            counter++;
        }
        if (sum < 1) {
            break;
        }
    }
    console.log (counter);

}

money([0.54])