function arrayManipulations(arr){
    let num = arr.shift().split(' ').map(Number);
    let commands;
    while (arr.length != 0){
        commands = arr.shift().split(' ');
        commands[1] = Number(commands[1]);
        switch (commands[0]){
            case 'Add':
                num.push(commands[1]);
                break;
            case 'Remove':           
                num = num.filter(x => x != commands[1]); 
                break;
            case 'RemoveAt':
                num.splice(commands[1], 1);
                break;
            case 'Insert':
                commands[2] = Number(commands[2]);
                num.splice(commands[2], 0, commands[1])
                break;
        }  
    }
    console.log(num.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
'Add 9',
'Remove 6',
'RemoveAt 3',
'Insert 8 3']
)