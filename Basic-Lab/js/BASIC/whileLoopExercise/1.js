function books (input){

    let book = input.shift();
    let bookNumber = +input.shift();
    let search = input.shift();
    let counter = 0;

    while (counter <= bookNumber){

        if (book === search){
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
        
        search = input.shift();
        counter++
    }

    if (counter > bookNumber){

        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookNumber} books.`);

    }

}

books([
    'Bourne',     '32',
    'True Story', 'Forever',
    'More Space', 'The Girl',
    'Spaceship',  'Strongest',
    'Profit',     'Tripple',
    'Stella',     'The Matrix',
    'Bourne'
  ]
  
  )