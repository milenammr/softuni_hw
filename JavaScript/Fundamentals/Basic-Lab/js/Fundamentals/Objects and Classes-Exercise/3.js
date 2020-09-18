function solve(arr1, arr2){
    let obj = {};
    for(let i = 0; i < arr1.length; i += 2){
        //i % 2 == 0 ? obj.name = arr1[i] : obj.quantity = arr1[i];
        let name = arr1[i];
        let quantity = Number(arr1[i + 1]);
        obj[name] = quantity;
    }
    for(let i = 0; i < arr2.length; i += 2){
        let name = arr2[i];
        let quantity = Number(arr2[i + 1]);
        if(obj[name] === undefined){
            obj[name] = 0;
        }
        obj[name] += quantity;
        //console.log(obj);
    }
    for(let i in obj){

        console.log(`${i} -> ${obj[i]}`);
    }


}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )