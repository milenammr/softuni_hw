function integerOrNot (first, second, third){
    let sum = first + second + third;
    let print = sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`;
    console.log(print);
}
integerOrNot (9, 100, 1.1);
integerOrNot (100, 200, 303);