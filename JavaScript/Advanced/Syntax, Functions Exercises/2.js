function solve(num1, num2){
    // 84/18 =  остатък 12
    // 18/12 = остатък 6
    // 12/6 = без остатък
    // => НОД(18,84) = 6
    let delimo = Math.max(num1, num2);
    let delitel = Math.min(num1, num2);
    let ost;
    let gcd;
    while (ost != 0){
        gcd = ost;
        ost = delimo % delitel;
        if (ost == 0){
            gcd = delitel;
        }
        delimo = delitel;
        delitel = ost;
    }
       console.log(gcd);
    
}
solve(5, 15)