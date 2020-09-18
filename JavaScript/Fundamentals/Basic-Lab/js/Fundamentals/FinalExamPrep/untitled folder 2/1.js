function solve(input){
    let message = input.shift();
    let line = input.shift();
    while (line !== 'Finish'){
        let [command, c1, c2] = line.split(' ');
        switch (command){
            case 'Replace':
                while (message.includes(c1)){
                    message = message.replace(c1, c2);
                }
                console.log(message);
                break;
            case 'Cut':
                if ((c1 < 0 || c1 > message.length) || (c2 < 0 || c2 > message.length)){
                    console.log("Invalid indexes!");
                } else {
                    let slice = message.substring(c1, Number(c2) + 1);
                    message = message.replace(slice, '');
                    console.log(message);
                }
                break;
            case 'Make':
                if (c1 === 'Upper'){
                    message = message.toUpperCase();
                } else {
                    message = message.toLowerCase();
                }
                console.log(message);
                break;
            case 'Check':
                if (message.includes(c1)){
                    console.log(`Message contains ${c1}`);
                } else {
                    console.log(`Message doesn't contain ${c1}`);
                }
                break;
            case 'Sum':
                if ((c1 < 0 || c1 > message.length) || (c2 < 0 || c2 > message.length)){
                    console.log("Invalid indexes!");
                } else {
                    let slice = message.substring(c1, 1 + Number(c2)).split('');
                    let sum = 0;
                    for (let i of slice){
                        sum += i.charCodeAt(0);
                    }
                    console.log(sum);
                }
                break;
        }
        line = input.shift();
    }
}
solve([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
  ]
  )