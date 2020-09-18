function solve(arr){
    let password = arr.shift();
    let line = arr.shift();
    while (line !== 'Done'){
        let [command, one, two] = line.split(' ');
        switch (command){
            case 'TakeOdd':
                let odd = '';
                for (let i in password){
                    i = Number(i);
                    if (i % 2 != 0){
                        odd += password[i];
                    }
                }
                password = odd;
                console.log(password);
                break;
            case 'Cut':
                let slice = password.substr(one, two);
                password = password.replace(slice, '');
                console.log(password);
                break;
            case 'Substitute':
                if (!password.includes(one)){
                    console.log("Nothing to replace!");
                } else {
                    while (password.includes(one)){
                        password = password.replace(one, two);
                    }
                    console.log(password);
                }
                break;
        }
        line = arr.shift();
    }
    console.log(`Your password is: ${password}`);
}
solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]
  )