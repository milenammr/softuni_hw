function solve(arr){
    let neighborhoods = arr.shift().split('@').map(Number);
    let [command, length] = arr.shift().split(' ');
    length = Number(length);
    let count = 0;
    for (let i of arr){
        if (neighborhoods[length] == 0){
            console.log(`Place ${length} already had Valentine's day.`);
        }
        neighborhoods[length] = neighborhoods[length] - 2;
        if (neighborhoods[length] == 0){
            console.log(`Place ${length} has Valentine's day.`);
        }
        [command, nextLength] = arr.shift().split(' ');
        if (command == 'Love!'){
            break;
        }
        nextLength = Number(nextLength);
        length += nextLength;
        if (length > neighborhoods.length - 1){
            length = 0;
        }
    }
    console.log(`Cupid's last position was ${length}.`);



}

solve(['10@10@10@2',
'Jump 1',
'Jump 2',
'Love!'
    ])

solve([
'2@4@2',
'Jump 2',
'Jump 2',
'Jump 8',
'Jump 3',
'Jump 1',
'Love!'
    ])