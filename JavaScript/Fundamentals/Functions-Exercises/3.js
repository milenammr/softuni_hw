function betweenTwoLetters (firstChar, secondChar){
    let result = '';
    let asciiCode = code => code.charCodeAt(0);
    if (asciiCode(firstChar) < asciiCode(secondChar)){
        for (let i = asciiCode(firstChar) + 1; i < asciiCode(secondChar); i++){
            let char = char => String.fromCharCode(i);
            result += `${char(i)} `
        }
    } else {
        for (let i = asciiCode(secondChar) + 1; i < asciiCode(firstChar); i++){
            let char = char => String.fromCharCode(i);
            result += `${char(i)} `
        }
    }
    console.log(result);
}
betweenTwoLetters('C',
'#'
)