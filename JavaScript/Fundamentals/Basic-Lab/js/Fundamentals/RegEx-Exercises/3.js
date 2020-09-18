function solve(income){
    let validpattern = /%(?<name>[A-Z][a-z]+)%[^\|\$\.%]*<(?<product>\w+)>[^\|\$\.%]*\|(?<count>\d+)\|[^\|\$\.%\d+]*(?<price>\d+[\.\d+]*)\$/g;
    let total = 0;
    for(let i of income){
        let line = validpattern.exec(i);
        if (line !== null){
            let name = line.groups.name;
            let product = line.groups.product;
            let count = Number(line.groups.count);
            let price = Number(line.groups.price);
            let totalPrice = count * price;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
            total += totalPrice;
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    '%Valid%<Valid>valid|10|valid20$',
    '%Peter%<Gum>|1|1.3$',
    '%George%<Croissant>|2|10.3$',
    'end of shift'
  ]
  )
  solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]
  )