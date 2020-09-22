function solve(arr){
    let speed = arr.shift();
    let place = arr.shift();
    let limit;
    switch (place){
        case 'residential':
            limit = 20;
            break;
        case 'city':
            limit = 50;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'motorway':
            limit = 130;
            break;
    }
    if (speed > limit){
        let over = speed - limit;
        if (over <= 20){
            console.log('speeding');
        } else if (over <= 40){
            console.log('excessive speeding');
        } else {
            console.log('reckless driving');
        }
    }
}
solve([200, 'motorway']);