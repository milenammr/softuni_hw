function solve(arr1, arr2) {
    let sum = 0;
    let concat = '';
    let arr3 = [];
    for (let index in arr1) {
        if (index % 2 == 0) {
            sum += Number(arr1[index]) + Number(arr2[index]);
        } else {
            sum = '';
            sum += arr1[index] + arr2[index];
        }
        if ( index < arr1.length - 1) {
            sum += ' - ';
        }
        concat += sum;
        sum = 0;
    }
    console.log(concat);
}
solve(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)