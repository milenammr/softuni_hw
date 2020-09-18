function solve (product1, product2, product3){
    let sum = product1.length + product2.length + product3.length;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);
}
solve ('chocolate', 'ice cream', 'cake')