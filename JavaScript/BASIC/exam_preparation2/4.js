function games(input) {
    let name = input.shift();
    let numOfGames = +input.shift();
    let points;
    let bonus = 0;
    let pointBonus = 0;
    let sumVolley = 0;
    let sumTennis = 0;
    let sumBadminton = 0;
    let all = 0;
    let countV = 0;
    let countT = 0;
    let countB = 0;
    for (let i = 1; i <= numOfGames; i++) {
        let game = input.shift();
        points = +input.shift();
        switch (game) {
            case 'volleyball': 
            bonus = 0.07;
            countV++;
            pointBonus = (points + (points * bonus));
            sumVolley += pointBonus;
            break;
            case 'tennis': 
            bonus = 0.05;
            countT++;
            pointBonus = (points + (points * bonus));
            sumTennis += pointBonus;
            break;
            case 'badminton': 
            bonus = 0.02;
            countB++;
            pointBonus = (points + (points * bonus));
            sumBadminton += pointBonus;
            break;
        }
        // pointBonus = Math.floor(points + (points * bonus));
        // sumVolley += pointBonus;
        // sumTennis += pointBonus;
        // sumBadminton += pointBonus;
    }
    //all = (sumVolley / countV) + (sumTennis / countT) + (sumBadminton / countB);
    all = sumVolley + sumTennis + sumBadminton;
    if ((sumVolley / countV) < 75 || (sumTennis / countT) < 75 || (sumBadminton / countB) < 75) {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(all)}.`);
    } else {
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(all)} points.`);
    }
}
games ([
'Pepi',
'    3',
'volleyball',
'    78',
'tennis',
'    98',
'badminton',
'    105',
])

// games ([
// 'Annie',
// '5',
// 'badminton',
// '34',
// 'tennis',
// '76',
// 'badminton',
// '10',
// 'volleyball',
// '62',
// 'badminton',
// '56',
// ])

games ([
'Ivan',
'7',
'volleyball',
'70',
'tennis',
'100',
'badminton',
'64',
'volleyball',
'125',
'tennis',
'62',
'tennis',
'72',
'badminton',
'87',
])