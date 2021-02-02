function solve(arr) {
    let obj = {};
    for (let el of arr) {
        let [city, population] = el.split(' <-> ');
        if (obj[city]){
            obj[city] += Number(population);
        } else {
            obj[city] = Number(population);
        }
    }
    for (let el in obj) {

        console.log(`${el} : ${obj[el]}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);