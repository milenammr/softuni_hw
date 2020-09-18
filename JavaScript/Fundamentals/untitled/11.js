function solve(arr){
    let energy = Number(arr.shift());
    let count = 0;
    for (let i in arr){
        energy -= Number(arr[i]);
        if (energy <= 0){
            energy = 0;
            console.log(`Not enough energy! Game ends with ${count} won battles and ${energy} energy`);
            break;
        } 
        count++;
        if (count % 3 == 0){
            energy += 3;
        }
        if (arr[i] == 'End of battle'){
            console.log(`Won battles: ${count}. Energy left: ${energy}`);
            break;
        }
    }
}
solve ([
    '100', '10', '10',
    '10',  '1',  '2',
    '3',   '73', '10'
  ])

  solve([ '200', '54', '14', '28', '13', 'End of battle' ])