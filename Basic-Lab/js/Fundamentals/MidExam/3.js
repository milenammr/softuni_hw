function solve(arr){
    let numbers = arr.split(' ').map(Number);
    let average = 0;
    for(let num of numbers){
        average += num;
    }
    average /= numbers.length;
    function myFunction(value, index, array) {
        return value > average;
      }
    let newNumbers = numbers.filter(myFunction);
    newNumbers.sort((a, b) => a - b).reverse();
    let result = newNumbers.slice(0, 5)
    if (result.length == 0){
        console.log('No');
    }
    console.log(result.join(' '));
}
solve ('10 20 30 40 50');
solve ('1')