function score (input){

    let score = Number(input.shift());
    let bonus;
    let newBonus;

    if (score <= 100){

        bonus = 5;
        
    } else if (score > 1000){

        bonus = score * 0.10;

    }else{

        bonus = score * 0.20;
    }

    if (score % 2 == 0){

        newBonus = bonus + 1;

    } else if (score % 10 == 5){

        newBonus = bonus + 2;
    } else {

        newBonus = bonus;
    }

    console.log(newBonus);
    console.log(score + newBonus);
}
score ([2703])