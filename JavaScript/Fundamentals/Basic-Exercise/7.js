function triangle(n){
    let str = '';
    for (let i = 1; i <= n; i++){
        for (let g = 1; g <= i; g++){
            str += `${i} `
        }
        console.log(str);
        str = '';
    }
}
triangle(6);