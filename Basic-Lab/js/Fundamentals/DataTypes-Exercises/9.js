function gladiator(losts, helmetPrice, swordPrice, shieldPrice, armorPrice){
    let counter = 0
    let helmetBrake = 0;
    let swordBrake = 0;
    let shieldBrake = 0;
    let armorBrake = 0;
    let expenses = 0;
    for (let i = 1; i <= losts; i++){
        counter++;
        if (counter % 2 == 0){
            helmetBrake++;
        }
        if (counter % 3 == 0){
            swordBrake++;
        }
        if (counter % 6 == 0){
            shieldBrake++;
            if (shieldBrake % 2 == 0){
                armorBrake++;
            }
        }
    }
    expenses = helmetBrake * helmetPrice + swordBrake * swordPrice + shieldBrake * shieldPrice + armorBrake * armorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(23,
    12.50,
    21.50,
    40,
    200
    
    )