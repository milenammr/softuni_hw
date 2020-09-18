function num (input) {
    let num = +input.shift();
    for (let i = 1; i <= num; i += 3){
        console.log (i);
    }
}
num ([7])