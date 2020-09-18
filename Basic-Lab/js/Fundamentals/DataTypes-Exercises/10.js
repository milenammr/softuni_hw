function spiceMine(startingYield){
    let days = 0;
    let totalAmount = startingYield;
    while (startingYield >= 100){
        days++;
        startingYield -= 10;
        if (startingYield >= 100){
            totalAmount += startingYield;
        }
        (totalAmount >= 26) ? totalAmount -= 26 : totalAmount = 0;
    }
    if (totalAmount >= 26){

        totalAmount = totalAmount - 26;
    } else {
        totalAmount = 0;
    }
    console.log(days);
    console.log(totalAmount);
}
spiceMine(99)