function solve(input) {
    let pattern = /[?,!.]/g;
    let result = input.replace(pattern, ' ');
    let strArr = result.replace('  ', ' ').toUpperCase().split(' ');
    console.log(strArr.join(', '));
}

solve('Hi, how are I.E. you?')