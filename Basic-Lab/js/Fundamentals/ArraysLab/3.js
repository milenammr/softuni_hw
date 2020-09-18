function reverse(num, array){
    let result = '';
    for (let i = num - 1; i >= 0; i--){
        result += array[i] + ' ';
    }
    console.log(result);
}
reverse(3, [10, 20, 30, 40, 50])