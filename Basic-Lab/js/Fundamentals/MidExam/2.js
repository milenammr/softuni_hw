function solve(arr){
    let collection = arr.shift().split(' ').map(Number);
    //collection = Number(collection);
    // function minus(arr){
    //     for(let x of arr){
    //         x = x - 1;
    //         return x;
    //     }
    // }
    for (let i = 0; i < arr.length; i++){
        let [command, num1, num2] = arr[i].split(' ');
        switch (command){
            case 'swap':
                let current = collection[num1];
                let current2 = collection[num2];
                collection.splice(num1, 1, current2);
                collection.splice(num2, 1, current);
                break;
            case 'multiply':
                let current3 = collection[num1];
                let current4 = collection[num2];
                let result = current3 * current4;
                collection.splice(num1, 1, result);
                break;
            case 'decrease':
                collection = collection.map(item => item - 1);
                break;
            case 'end':
                break;
        }
    }
    console.log(collection.join(', '));
}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )