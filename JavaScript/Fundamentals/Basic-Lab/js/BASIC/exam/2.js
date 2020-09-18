function cat(input) {
    let min = +input.shift();
    let numWalk = +input.shift();
    let call = +input.shift();
    let allMin = min * numWalk;
    let burnCall = allMin * 5;
    let n = call * 0.5;
    if (burnCall >= n){

        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnCall}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnCall}.`);
    }

}
cat([
    '    30',
    '    3',
    '    600    ',
])

cat ([
'    15',
'    2',
'    500    ',
])