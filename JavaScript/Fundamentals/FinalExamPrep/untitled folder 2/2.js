function solve(input){
    let pattern = /!(?<command>[A-Z][a-z]{3,})!:\[(?<message>[a-zA-z]{8,})\]/g;
    let num = input.shift();
    for (let i = 0; i < num; i++){
        let line = input[i];
        let valid = pattern.exec(line);
        let result = '';
        if (valid == null){
            console.log("The message is invalid");
        } else {
            for(let i of valid.groups.message){
                result += i.charCodeAt(0).toString() + ' '; 
            }
            console.log(`${valid.groups.command}: ${result}`);
        }
    }
}
solve([ '2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]' ])