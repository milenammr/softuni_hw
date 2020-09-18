function solve(furnitures){
    let pattern = /^>>(?<furniture>[a-zA-Z]+)<<(?<price>\d+|\d+\.\d{2})!(?<quantity>\d+)$/;
    let line = furnitures.shift();
    let bougth = [];
    let sum = 0;
    let totalPrice = 0;
    while(line !== 'Purchase'){
        if (pattern.test(line)){
            let validFurniture = pattern.exec(line);
            let furniture = validFurniture.groups.furniture;
            let price = validFurniture.groups.price;
            let quantity = validFurniture.groups.quantity;
            bougth.push(furniture);
            sum = Number(price) * Number(quantity);
            totalPrice += sum;
        }
        line = furnitures.shift();
    }
    console.log(`Bought furniture:`);
    for(let i of bougth){
        console.log(i);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
solve([ '>>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', '>>G<<768!5', 'Purchase' ]
    )