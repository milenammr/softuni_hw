function food (input){
    let pile = +input.shift();
    let riba = + input.shift();
    let vege = +input.shift();
    let delivery = 2.5;
    let all = (pile * 10.35) + (riba * 12.40) + (vege * 8.15);
    console.log(`Total: ${(all + (all * 0.2) + delivery).toFixed(2)}`);
}

food ([
    '1', '1','1',
])