function solve (arr){
    let pattern = /(\| )/g;
    let pattern2 = /( \| )/g;
    let pattern3 = /( \|)/g;
    let [townh, latih, longih] = arr.shift().replace(pattern, '').split(' ');
    let towns = [];
    for(let i of arr){
        let [town, lati, longi] = i.replace(pattern2, ',').replace(pattern, '').replace(pattern3, '').split(',');
        town = {
            [townh]: town,
            [latih]: Number(Number(lati).toFixed(2)),
            [longih]: Number(Number(longi).toFixed(2)),
        }
        towns.push(town);
    }
    
    console.log(JSON.stringify(towns));
}
// solve(['| Town | Latitude | Longitude |',
// '| Sofia | 42.696552 | 23.32601 |',
// '| Beijing | 39.913818 | 116.363625 |']
// )

solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)