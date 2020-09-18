function repeat(string, numRepeat){
    let result = '';
    for (let i = 0; i < numRepeat; i++){
        result += string;
    }
    console.log(result);
    return result;
}
repeat('abc', 3);