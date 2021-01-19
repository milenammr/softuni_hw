function solve(input = 5){
    let result = '* ';
    for (let i = 0; i < input; i++) {
        let stars = result.repeat(input);
        console.log(stars);
    }
}

solve(8)