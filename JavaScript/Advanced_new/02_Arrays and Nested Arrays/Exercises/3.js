function solve(commands) {
    let arr = [];
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == 'add') {
            arr.push(i + 1);
        } else {
            arr.pop(arr[i]);
        }
    }
    if (arr.length){
        console.log(arr.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']



)