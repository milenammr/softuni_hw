function big (input){

    let n = +input.shift();
    let counter = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let num;
    while (counter < n) {
        num = +input.shift();

        if (num > max){
            max = num;
        }

        counter++;
    }

    console.log(max);
}

big([ '2', '100', '99' ])