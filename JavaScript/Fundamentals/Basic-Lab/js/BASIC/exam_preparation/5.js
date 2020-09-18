function party (input){
    let art = +input.shift();
    let num = input.shift();
    let allNum = 0;
    let sumForGroup = 0;
    let forAllGroups = 0;
    while (num != 'The restaurant is full'){
        num = +num;
        allNum += num;
        if (num < 5){
            sumForGroup = num * 100;
        } else {
            sumForGroup = num * 70;
        }
        forAllGroups += sumForGroup;
        num = input.shift();
    }
    let sum = forAllGroups - art;
    if (forAllGroups < art){
        console.log(`You have ${allNum} guests and ${forAllGroups} leva income, but no singer.`);
    } else {
        console.log(`You have ${allNum} guests and ${sum} leva left.`);
    }
    
}
// party ([
// '2800',
// '5',
// '5',
// '4',
// '6',
// '6',
// '12',
// '12',
// 'The restaurant is full',
// ])

party ([
'    1800',
'    4',
'    4',
'    4',
'    4',
'    6',
'    6',
'The restaurant is full',
])