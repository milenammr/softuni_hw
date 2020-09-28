function solve(arr){
    let towns = {};
    for(let i of arr){
        let [city, population] = i.split(' <-> ');
        if (towns[city]){
            towns[city] += Number(population);
        } else {
            towns[city] = Number(population);
        }
    }
    let t = Object.entries(towns);
    t.forEach(element => {
        console.log(`${element[0]} : ${element[1]}`);
    });
}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)