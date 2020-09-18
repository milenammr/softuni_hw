function table (input){
    let n = input.shift();
    // for (let i = 2; i >= 0; i--){
        let num = n[2];
        num = +num;
        for (let a = 1; a <= num; a++){
            num = n[1];
            num = +num;
            for (let b = 1; b <= num; b++){
                num = n[0];
                num = +num;
                for (let c = 1; c <= num; c++){
                    console.log(`${a} * ${b} * ${c} = ${a * b * c};`);
                }
                num = n[1];
                num = +num;
            }
            num = n[2];
            num = +num;
        }
    // }
}
table ([
    '222'
])