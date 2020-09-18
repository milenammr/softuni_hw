function combination (input){
let n = +input.shift();
let counter = 0;
for (let x = 0; x <= n; x++){
    for (let y = 0; y <= n; y++) {
        for (let z = 0; z <= n; z++) {
            if (x + y + z == n){
                counter++;
            }
            
         
        }
    }
}
console.log(counter);
}
combination (['5'])