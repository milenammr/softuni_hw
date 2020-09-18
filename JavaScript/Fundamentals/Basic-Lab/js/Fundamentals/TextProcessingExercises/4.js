function solve(word, string){
    let txt = word.toLowerCase();
    string = string.toLowerCase().split(' ');
    if (string.includes(txt)){
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
solve('Javascript',
'javaScript is the best programming language'
)