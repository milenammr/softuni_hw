function solve(text){
    // let words = [];
    // for (let index in text){
    //     index = Number(index);
    //     if (text.charCodeAt(index) > 64 && text.charCodeAt(index) < 91){
    //         let word = text.substring(0, index);
    //         text = text.replace(word, '');
    //         words.push(word);
    //     }
    // }
    let regex = /[A-Z][a-z]+/g;
    text = text.search(regex)
    console.log(text);
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')