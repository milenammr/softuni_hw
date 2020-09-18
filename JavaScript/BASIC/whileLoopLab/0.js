function read (input){
    let string = input.shift();
    while (string !== 'Stop'){

        string = input.shift();
    }
}
read (['Nakov',
    'SoftUni',
    'Sofia',
    'Bulgaria',
    'SomeText',
    'Stop'])