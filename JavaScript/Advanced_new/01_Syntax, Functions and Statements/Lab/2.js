function solve(...param) {
    let sum = 0;
    param.forEach(element => {
        sum += element.length;
    });
    console.log(sum);
    console.log(Math.floor(sum / param.length));
}

solve('chocolate', 'ice cream', 'cake');