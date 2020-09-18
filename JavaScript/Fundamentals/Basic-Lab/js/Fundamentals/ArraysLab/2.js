function weekdays(num){
    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    switch (num){
        case 1: console.log(weekdays[0]);
        break;
        case 2: console.log(weekdays[1]);
        break;
        case 3: console.log(weekdays[2]);
        break;
        case 4: console.log(weekdays[3]);
        break;
        case 5: console.log(weekdays[4]);
        break;
        case 6: console.log(weekdays[5]);
        break;
        case 7: console.log(weekdays[6]);
        break;
        default: console.log('Invalid day!');
    }
}
weekdays(-11)