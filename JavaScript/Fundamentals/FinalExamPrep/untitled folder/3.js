function solve(input){
    let numberCars = Number(input.shift());
    let cars = [];
    let car = {};
    while (cars.length < numberCars){
        let [model, mileage, fuel] = input.shift().split('|');
        car = {
            model,
            mileage,
            fuel
        }
        cars.push(car);
    }
    let line = input.shift();
    while (line !== 'Stop'){
        let [command, sc1, sc2, sc3] = line.split(' : ');
        switch(command){
            case 'Drive':
                for(let i = 0; i < cars.length; i++){
                    if(sc1 === cars[i].model){
                        if (Number(sc3) > Number(cars[i].fuel)){
                            console.log("Not enough fuel to make that ride");
                        } else {
                            cars[i].fuel = Number(cars[i].fuel);
                            cars[i].mileage = Number(cars[i].mileage);
                            cars[i].fuel -= Number(sc3);
                            cars[i].mileage += Number(sc2);
                            console.log(`${sc1} driven for ${sc2} kilometers. ${sc3} liters of fuel consumed.`);
                            if (cars[i].mileage >= 100000){
                                cars.splice(i, 1);
                                console.log(`Time to sell the ${sc1}!`);
                            }
                        }
                    }
                }
                break;
            case 'Refuel':
                for (let i of cars){
                    if (sc1 === i.model){
                        i.fuel += Number(sc2);
                        if (i.fuel > 75){
                            i.fuel = 75;
                        }
                        console.log(`${sc1} refueled with ${sc2} liters`);
                    }
                }
                break;
            case 'Revert':
                for (let i of cars){
                    if (sc1 === i.model){
                        i.mileage -= Number(sc2);
                        if (i.mileage < 10000){

                        } else {

                            console.log(`${sc1} mileage decreased by ${sc2} kilometers`);
                        }
                    }
                }
                break;
        }
        line = input.shift();
    }
    cars.sort((a, b) => b.mileage - a.mileage);
    for (let i of cars){
        console.log(`${i.model} -> Mileage: ${i.mileage} kms, Fuel in the tank: ${i.fuel} lt.`);
    }
}
solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )