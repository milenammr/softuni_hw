function solve(words, string){
    let wordArr = words.split(', ');
    wordArr.forEach(element => {
        let template = '*'.repeat(element.length);
        string = string.replace(template, element);
    });
    // let obj = {
    //     length: '',
    //     word: '',
    // };
    // for(let word of wordArr){
    //     obj.length = word.length;
    //     obj.word = word;
    //     let template = string.substr(string.indexOf('*'), obj.length);
    //     string = string.replace(template, obj.word);
    // }
    console.log(string);
}
solve('great, learning, yes',
'softuni is ***** place for ******** new programming languages ***'
)