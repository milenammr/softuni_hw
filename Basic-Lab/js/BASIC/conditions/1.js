function allThimes (input) {

    let first = Number(input.shift());
    let second = Number(input.shift());
    let third = Number(input.shift());

    let allsum = first + second + third;
    let min = Math.floor(allsum / 60);
    let sec = allsum % 60;

    if (sec < 10){

        console.log (`${min}:0${sec}`);
    }else{

        console.log (`${min}:${sec}`);
    }
    

}

allThimes ([45, 45, 44])