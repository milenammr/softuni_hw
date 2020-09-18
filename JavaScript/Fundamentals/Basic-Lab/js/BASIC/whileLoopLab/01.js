function num (input){
    let numbers = input.shift();
    let sum = 0;
    while (numbers !== 'Stop'){
        sum += +numbers;
        numbers = input.shift();
    }
    console.log(sum);
}
num (['10','20','30','45','Stop'])