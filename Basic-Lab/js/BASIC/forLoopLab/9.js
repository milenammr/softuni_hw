function num (input) {
 let num = +input.shift();
 for (let i = num; i != 0; i--){
     console.log(i);
 }
}
num ([6])