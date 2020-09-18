function sum(arr){
    let last = Number(arr.pop());
    let first = Number(arr.shift());
    return last + first;
}
sum(['20', '30', '40']);