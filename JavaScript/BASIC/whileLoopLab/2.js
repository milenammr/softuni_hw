function pass (input){

    let user = input.shift();
    let pass = input.shift();
    let data = input.shift();

    while (pass !== data){

        data = input.shift();
    }

    console.log(`Welcome ${user}!`)

}

pass([ 'Gosho', 'secret', 'secret' ]
)