function subtraction(numbers){
    let odd = 0;
    let even = 0;
    for (let num of numbers){
        if (num % 2 == 0){
            even += num;
        } else {
            odd += num;
        }
    }
    console.log(even - odd);
}
subtraction([1,2,3,4,5,6])