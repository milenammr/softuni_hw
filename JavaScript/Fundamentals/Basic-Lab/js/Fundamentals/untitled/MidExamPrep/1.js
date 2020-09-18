function solve(arr){
    arr = arr.map(Number);
    let breakTime = 0;
    let peoplePerHour = arr[0] + arr[1]+ arr[2];
    let time = 0;
    time = Math.ceil(arr[3] / peoplePerHour);
    if (time > 3){
        breakTime = time % 3;
    }
    let hour = time + breakTime;
        console.log('Time needed: ' + hour + 'h.');
}
solve([ '3', '2', '5', '40' ]
    )