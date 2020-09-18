function solve (word){
    let characters = '';
    for (let char of word.split('')){
        let lastChar = characters.slice(-1);
        if (lastChar !== char){
            characters += char;
        }
    }
    // for (let i = 0; i < word.length; i++){
    //     for( let j = 1; j < word.length; i++){
    //         if (word[i] == word[j]){
    //             word = word.replace(word[j], '')
    //         } else {
    //             break;
    //         }
            
    //     }
    // }
    console.log(characters);
}
solve('aaaaabbbbbcdddeeeedssaa')