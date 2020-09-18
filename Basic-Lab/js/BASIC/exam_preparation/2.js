function ship (input){
    let widthShip = +input.shift();
    let lenghtShip = +input.shift();
    let hightShip = +input.shift();
    let highAstro = +input.shift();
    let room = 2 * 2 * (highAstro + 0.4);
    let ship = widthShip * lenghtShip * hightShip;
    let numAstro = Math.floor(ship / room);
    if (numAstro >= 3 && numAstro <= 10){
        console.log(`The spacecraft holds ${numAstro} astronauts.`);
    } else if (numAstro < 3){
        console.log("The spacecraft is too small.");
    } else if (numAstro > 10){
        console.log("The spacecraft is too big.");
    }  
}
// ship ([
// '    3.5',
// '    4',
// '    5',
// '    1.70    ',
// ])

ship ([
    4.5,
4.8,
5,
1.75,
])