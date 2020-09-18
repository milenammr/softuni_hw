function reverse(strings){
    let result = '';
    for (let i = strings.length - 1; i >= 0; i--){
        result += strings[i] + ' ';
    }
    console.log(result);
}
reverse(['abc', 'def', 'hig', 'klm', 'nop']);