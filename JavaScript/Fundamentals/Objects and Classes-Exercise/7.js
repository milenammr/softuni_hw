function solve (){
    class Vehicle {
        type = '';
        model = ''; 
        parts = {
            engine: 0, //(quality of the engine);
            power: 0,
            quality: 0,
        }
        fuel = 0;
        drive (x){
            
            this.fuel -= x;
        }
        constructor(type, model, parts, fuel){
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.parts.quality = parts.engine * parts.power;
            this.fuel = fuel;
        }
    }
// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);

}
solve();