function examples(start, end){
    let str = '';
    let sum = 0;
    for (let i = start; i <= end; i++){
        str += `${i} `;
        sum += i;
    }
    console.log(str);
    console.log(`Sum: ${sum}`);
}
examples(50, 60)