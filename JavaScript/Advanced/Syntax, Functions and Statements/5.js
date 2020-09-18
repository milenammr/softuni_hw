function solve (r){
    let type = typeof r;
    if (type == 'number'){
        let s = Math.PI * (r ** 2);
        console.log(s.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}
solve (5)