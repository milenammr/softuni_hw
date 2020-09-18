function solve(string){
    let arr = string.split(' ');
    let lettersOnly = false;
    arr.forEach(element => {
        let word = element.includes('#');
        if (word == true && element.length > 1){
            let specialword = element.substring(1);
            for(let letter of specialword){
                let code = letter.charCodeAt(0);
                if ((code < 91 && code > 64) || (code < 123 && code > 96 )){
                    lettersOnly = true;
                } else {
                    lettersOnly = false;
                    break;
                }
                
            }
            if (lettersOnly){

                console.log(specialword);
            }
        }
    });
}
solve('Nowadays everyone uses # to tag a #1pecial word in #socialMedia')