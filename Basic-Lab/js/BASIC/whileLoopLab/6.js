function min (input){

    let n = +input.shift();
    let counter = 0;
    let max = Number.MAX_SAFE_INTEGER;

    while (counter < n){
        let data = +input.shift();
        if (data < max){
            max = data;
        }
        counter ++;
    }

    console.log(max);
}

min([ '5', '-100', '-200', '-300', '-400', '-500' ])