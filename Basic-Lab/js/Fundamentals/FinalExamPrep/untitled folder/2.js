function solve(text){
    let pattern = /(@{1}|#{1})[a-zA-Z]{3,}\1(@{1}|#{1})[a-zA-Z]{3,}\1/g;
    let valid = text.toString().match(pattern);
    let mirror = [];
    if (valid.length > 0){
        console.log(`${valid.length} word pairs found!`);
    } else {
        console.log("No word pairs found!");
    }
    for (let i of valid){
        let word1 = i.substring(0, i.length/2);
        let word2 = i.substring(i.length/2);
        let test = word2.split('').reverse().join('');
        if (word1 === test){
            //mirror.push(word1);
            //mirror.push(word2);
            mirror.push(`${word1.substr(1, word1.length - 2)} <=> ${word2.substr(1, word2.length - 2)}`);
        }
    }
    if (mirror.length > 0){
        console.log(`The mirror words are:`);
        console.log(mirror.join(', '));
    } else {
        console.log("No mirror words!");
    }
}
solve('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r')