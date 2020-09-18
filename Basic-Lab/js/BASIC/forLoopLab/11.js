function num (input) {
    let num = +input[0];
    for (i = 0; i <= num; i += 2){
        console.log(2 ** i);
    }
}
num ([7])