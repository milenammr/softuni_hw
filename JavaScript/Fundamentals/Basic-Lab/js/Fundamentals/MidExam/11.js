function solve(arr){
    arr = arr.map(Number);
    let allPeople = arr[3];
    let breakTime = 0;
    let count = 0;
    let peoplePerHour = arr[0] + arr[1]+ arr[2];
    while (allPeople > 0){
        allPeople -= peoplePerHour;
        count++
        if(allPeople <= 0){
            break;
        }
        if (count % 3 == 0){
            breakTime++;
        }
    }
    // time = Math.ceil(arr[3] / peoplePerHour);
    // if (time > 3){
    //     breakTime = Math.floor(time / 3);
    // }
    let hour = count + breakTime;
        console.log('Time needed: ' + hour + 'h.');
}
solve(['1','2','3','45']
    )