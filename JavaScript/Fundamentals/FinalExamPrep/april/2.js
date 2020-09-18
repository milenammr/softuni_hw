function solve (text){
    let digitPattern = /[0-9]/g;
    let emojiPattern = /\*{2}[A-Z][a-z+]{2,}\*{2}|\:{2}[A-Z][a-z+]{2,}\:{2}/g;
    let digits = text.toString().match(digitPattern);
    let threshold = 1;
    for(let digit of digits){
        threshold *= Number(digit);
    }
    let emojies = text.toString().match(emojiPattern);
    let coolEmo = emojies.filter(cool);
    function cool(element){
        let lettersPattern = /[a-zA-z]/g;
        let letters = element.match(lettersPattern);
        let result = 0;
        for (let i of letters){
            result += i.charCodeAt(0);   
        }
        if (result > threshold){
            return element;
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojies.length} emojis found in the text. The cool ones are:`);
    for(let i of coolEmo){
        console.log(i);
    }
}
solve('5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::')