function solve(arr){
    let initialHealth = 100;
    let bitcoins = 0;
    let dead = false;
    let rooms = arr.split('|');
    for (let i = 0; i < rooms.length; i++){
        let [monster, points] = rooms[i].split(' ');
        points = Number(points);
        switch (monster){
            case 'potion':
                initialHealth = initialHealth + points;
                if (initialHealth > 100){
                    points = initialHealth - points - 100;
                    points = Math.abs(points);
                    initialHealth = 100;
                }
                console.log(`You healed for ${points} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
                break;
            case 'chest':
                bitcoins += points;
                console.log(`You found ${points} bitcoins.`);
                break;
            default:
                initialHealth = initialHealth - points;
                if (initialHealth <= 0){
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${i + 1}`);
                    dead = true;
                    break;
                }
                console.log(`You slayed ${monster}.`);
                break;
        }
        if (dead){
            break;
        }
        if (i == rooms.length - 1){
            console.log(`You've made it!`);
            console.log(`Bitcoins: ${bitcoins}`);
            console.log(`Health: ${initialHealth}`);
        }
    }
}
//solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000'])
solve( 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' )