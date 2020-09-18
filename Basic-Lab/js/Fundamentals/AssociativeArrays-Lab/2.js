function solve(info){
    let products = {};
    for(let line of info){
        let [product, price] = line.split(' ');
        if (Object.keys(products).includes(product)){
            products[product] += Number(price);
        }else{
            products[product] = Number(price);
        }
    }
    for(let i in products){
        console.log(`${i} -> ${products[i]}`);

    }
}
solve(
    ['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']

)