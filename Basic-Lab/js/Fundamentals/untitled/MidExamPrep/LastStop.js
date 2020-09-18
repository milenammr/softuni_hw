function solve(arr){
    let collection = arr.shift().split(' ');
    for (let i = 0; i < arr.length; i++){
        let [command, num1, num2] = arr[i].split(' ');
        switch (command){
            case 'Change':
                if(collection.indexOf(num1) >= 0){
                    collection.splice(collection.indexOf(num1), 1, num2);
                }
                break;
            case 'Hide':
                if(collection.indexOf(num1) >= 0){
                    collection.splice(collection.indexOf(num1), 1);
                }
                break;
            case 'Switch':
                if(collection.indexOf(num1) >= 0 && collection.indexOf(num2) >= 0){
                    let a = collection.indexOf(num1);
                    let b = collection.indexOf(num2);
                    collection.splice(a, 1, num2);
                    collection.splice(b, 1, num1);
                }
                break;
            case 'Insert':
                if(collection.length > Number(num1)){
                    collection.splice(Number(num1) + 1, 0, num2);  
                }            
                break;
            case 'Reverse':
                collection.reverse();
                break;
            case 'END':
                break;
        }
    }
    console.log(collection.join(' '));
}
solve([
    '115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END'
  ]
  )

solve([
    '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
  ]
  )