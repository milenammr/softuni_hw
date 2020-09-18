function piramyd (input){
    let n = +input.shift();
    let row = '';
    let isBigger = false;
    let current = 1;
    for (let i = 1; i <= n; i++){
        for (let c = 1; c <= i; c++){
            if (current > n){
                isBigger = true;
                break;
            }
            row += current + ' ';   
            current++;
        }
        console.log(row);
        row = '';
        if (isBigger){
            break;
        }
    }
}
piramyd(['10'])