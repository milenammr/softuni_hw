function speed (input){

    let record = Number(input.shift());
    let s = Number(input.shift());
    let t = Number(input.shift());

    let tAll = s * t;
    let slow = Math.floor(s / 15) * 12.5;

    let time = tAll + slow;

    if (time < record) {
    console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    } else {
    let miss = Math.abs(time - record);
    console.log(`No, he failed! He was ${miss.toFixed(2)} seconds slower.`)
    }
}

speed ([55555.67,
    3017,
    5.03])