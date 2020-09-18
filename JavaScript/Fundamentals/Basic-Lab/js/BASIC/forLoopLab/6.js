function minmax (input) {
    let number = +input.shift();
    let num;
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < number; i++) {
        num = +input.shift();
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
        
    }
    console.log(`Max number: ${max}`);
    console.log(`Min number: ${min}`);
}

minmax ([
    '6',    '250',
    '5',    '2',
    '0',    '100',
    '1000'
  ]
  
)