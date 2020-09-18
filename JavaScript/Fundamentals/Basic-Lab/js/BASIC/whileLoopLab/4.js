function account (input){

    let numberOfTransactions = +input.shift();

    let balance = 0;
    let counter = 0;

    while (counter < numberOfTransactions){

        let transaction = +input.shift();

        if (transaction < 0){
            console.log('Invalid operation!');
            break;
        }

        balance += transaction;
        console.log(`Increase: ${transaction.toFixed(2)}`);
        counter++;
    }
    
    console.log(`Total: ${balance.toFixed(2)}`)
}


account([ '5', '120', '45.55', '-150' ])