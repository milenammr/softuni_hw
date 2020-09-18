function decimals (input){

    let num = Number(input.shift());
    let dOne = input.shift();
    let dTwo = input.shift();

    if (dOne === 'cm'){

        num *= 10;

    } else if (dOne === 'm'){

        num *= 1000;

    }

    if (dTwo === 'cm'){

        num /=10;

    } else if (dTwo === 'm'){

        num /= 1000;

    }

    console.log(num.toFixed(3));
}

decimals ([12, "mm", 'm'])