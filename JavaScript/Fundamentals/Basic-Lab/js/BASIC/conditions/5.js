function time (input){

    let hour = Number(input.shift());
    let min = Number(input.shift());
    
    min += 15;

    if (min > 59){
        min -= 60;
        hour += 1;
    }

    if (hour > 23){
        hour = 0;
    }

    if (min < 10){

    console.log(`${hour}:0${min}`);
    } else {
    console.log(`${hour}:${min}`);
    }


}

time ([23, 59])