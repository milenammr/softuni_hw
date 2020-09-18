function solve(arr){
    let line = arr.shift();
    let targetCities = [];
    let newCity = true;
    while (line !== 'Sail'){
        let target = {
            city: '',
            population: 0,
            gold: 0,
        }
        let [city, population, gold] = line.split('||');
        for (let i = 0; i < targetCities.length; i++){
            if (targetCities[i].city === city){
                targetCities[i].population += Number(population);
                targetCities[i].gold += Number(gold);
                newCity = false;
            }
        }
        if(newCity){

            target.city = city;
            target.population = Number(population);
            target.gold = Number(gold);
            targetCities.push(target);
        }
        line = arr.shift();
    }
    line = arr.shift()
    while (line !== 'End'){
        line = line.split('=>');
        let command = line[0];
        let city = line[1];
        let population;
        let gold;
        switch(command){
            case 'Plunder':
                population = line[2];
                gold = Number(line[3]);
                for (let i = 0; i < targetCities.length; i++){
                    if (targetCities[i].city === city){
                        targetCities[i].population -= Number(population);
                        targetCities[i].gold -= Number(gold);
                        console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`);
                    }
                    if (targetCities[i].population == 0 || targetCities[i].gold == 0){
                        targetCities.splice(i, 1);
                        console.log(`${city} has been wiped off the map!`);
                    }
                }
                break;
            case 'Prosper':
                gold = Number(line[2]);
                for (let i = 0; i < targetCities.length; i++){
                    if (targetCities[i].city === city){
                        if (gold > 0){
                            targetCities[i].gold += Number(gold);
                            console.log(`${gold} gold added to the city treasury. ${city} now has ${targetCities[i].gold} gold.`);
                        } else {
                            console.log("Gold added cannot be a negative number!");
                        }
                    }
                }
                break;
        }
        line = arr.shift();
    }
    if (targetCities.length > 0){
        console.log(`Ahoy, Captain! There are ${targetCities.length} wealthy settlements to go to:`);
        let ordered = targetCities.sort((a, b) => b.gold - a.gold);
        for(let i of ordered){
            console.log(`${i.city} -> Population: ${i.population} citizens, Gold: ${i.gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }

}
// solve([
// 'Tortuga||345000||1250',
// 'Santo Domingo||240000||630',
// 'Havana||410000||1100',
// 'Sail',
// 'Plunder=>Tortuga=>75000=>380',
// 'Prosper=>Santo Domingo=>180',
// 'End',
//     ])

solve([
'Nassau||95000||1000',
'San Juan||930000||1250',
'Campeche||270000||690',
'Port Royal||320000||1000 ',
'Port Royal||100000||2000',
'Sail',
'Prosper=>Port Royal=>-200',
'Plunder=>Nassau=>94000=>750 ',
'Plunder=>Nassau=>1000=>150',
'Plunder=>Campeche=>150000=>690',
'End',
    ])