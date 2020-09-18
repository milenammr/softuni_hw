function solve(arr){
    let collection = arr.shift().split(', ');
    let blacklistedNamesCount = 0;
    let lostNamesCount = 0;
    for (let i = 0; i < arr.length; i++){
        let [command, num1, num2] = arr[i].split(' ');
        switch (command){
            case 'Blacklist':
                if(collection.indexOf(num1) >= 0){
                    collection.splice(collection.indexOf(num1), 1, "Blacklisted");
                    console.log(`${num1} was blacklisted.`);
                    blacklistedNamesCount++;
                } else {
                    console.log(`${num1} was not found.`);
                }
                break;
            case 'Error':
                if(collection[num1] == "Blacklisted" || collection[num1] == 'Lost'){          
                    break;
                } else {
                    let currentName = collection[num1];
                    collection.splice(num1, 1, 'Lost');
                    console.log(`${currentName} was lost due to an error.`);
                    lostNamesCount++;
                }
                break;
            case 'Change':
                    let currentName = collection[num1];
                    collection.splice(num1, 1, num2);
                    console.log(`${currentName} changed his username to ${num2}.`);
                break;
            case 'Report':
                console.log(`Blacklisted names: ${blacklistedNamesCount}`);
                console.log(`Lost names: ${lostNamesCount}`);
                console.log(collection.join(' '));
                break;
        }
    }
}
// solve([
//     'Mike, John, Eddie',
//     'Blacklist Mike',
//     'Error 0',
//     'Error 1',
//     'Change 2 Mike123',
//     'Report'
//   ]
//   )

  solve([
    'Mike, John, Eddie, William',
    'Error 3',
    'Error 3',
    'Change 0 Mike123',
    'Blacklist Eddie',
    'Report'
  ]
  )