function solve(text){
    let concealedMessage = text.shift();
    for (let i = 0; i < text.length; i++){
        let [command, subcommand1, subcommand2] = text[i].split(':|:');
        switch (command){
            case 'InsertSpace':
                let slice =concealedMessage.substring(subcommand1);
                concealedMessage = concealedMessage.replace(slice, ` ${slice}`);
                console.log(concealedMessage);
                break;
            case 'Reverse':
                if (concealedMessage.includes(subcommand1)){
                    let slice = concealedMessage.substr(concealedMessage.indexOf(subcommand1), subcommand1.length);
                    slice = slice.split('').reverse().join('');
                    concealedMessage = concealedMessage.replace(subcommand1, slice);
                    console.log(concealedMessage);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                while (concealedMessage.includes(subcommand1)){
                    concealedMessage = concealedMessage.replace(subcommand1, subcommand2);
                }
                console.log(concealedMessage);
                break;
            case 'Reveal':
                console.log(`You have a new text message: ${concealedMessage}`);
                break;
        }
    }
    
}
solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  
  )