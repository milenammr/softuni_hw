function solve(steps, stepLength, speed){
    let distance = (steps * stepLength);
    let speedInMetersInSec = speed / 3.6;
    let relax = Math.floor(distance / 500);
    let time = (distance / speedInMetersInSec + relax * 60);
    let hour = time /3600
    let min = time / 60;
    let sec = time % 60;
    console.log(`${hour < 10 ? '0': ''}${Math.floor(hour)}:${min < 10 ? '0': ''}${Math.floor(min)}:${sec < 10 ? '0': ''}${Math.ceil(sec)}`);
}
solve(2564, 0.70, 5.5)
solve(4000, 0.60, 5)