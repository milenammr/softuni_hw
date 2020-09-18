function solve(arr){
    let obj = {};
    for (let i in arr){
        let things = arr[i].split(' | ');
        things[1] = Number(things[1]);
        things[2] = Number(things[2]);
        obj.town = things[0];
        obj.latitude = things[1].toFixed(2);
        obj.longitude = things[2].toFixed(2);

        console.log(obj);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)