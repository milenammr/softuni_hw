function solve(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes(){
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(incr){
            this.population += Math.floor(this.population * incr) / 100;
        },
        applyRecession(incr){
            this.treasury -= Math.ceil(this.treasury * incr) / 100;
        }

    }
    return city;
//    city.collectTax(8);
// console.log(city.treasury);
// // city.applyGrowth(5);
// // console.log(city.population);
// city.applyRecession(5);
//  console.log(city.treasury);
}

solve('Tortuga',
7000,
15000.7
)