function border (input){

    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let x = Number(input.shift());
    let y = Number(input.shift());

    
    
    let firstCond = ((x1 <= x && x <= x2) && (y1 === y || y === y2));
    let secondCond = ((y1 <= y && y <= y2) && (x1 === x || x === x2));

    if (firstCond || secondCond){
        console.log('Border');
    } else {
        console.log('Inside / Outside');
    }
}

border([
    2, -3, 12, 3, 8, -1
])