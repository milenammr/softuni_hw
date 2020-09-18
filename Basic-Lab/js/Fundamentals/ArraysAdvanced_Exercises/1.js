function train(arr){
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());
    for (let i of arr){
        let [first, second] = i.split(' ');
        if (first == 'Add'){
            wagons.push(Number(second));
        } else {
            for (let passengers in wagons){
                first = Number(first);
                passengers = Number(passengers);
                if (wagons[passengers] + first <= maxCapacity){
                    wagons.splice(passengers, 1, wagons[passengers] + first);
                    break;
                } 
            }
        }
    }
    console.log(wagons.join(' ')); 
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']

)