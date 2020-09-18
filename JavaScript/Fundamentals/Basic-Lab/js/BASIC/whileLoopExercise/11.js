function books(input) {
    let hisBook = input.shift();
    let capacity = +input.shift();
    let books = input.shift();
    let counter = 0;
    while (counter < capacity) {
        
        if (hisBook === books){
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
        books = input.shift();
        counter++;
    }
    if (counter >= capacity){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${counter} books.`);
    }
    
}

// books([
// 'Troy',
// '8',
// 'Stronger',
// 'Life Style',
// 'Troy',
//  ])

// books([
//     'Bourne',     '32',
//     'True Story', 'Forever',
//     'More Space', 'The Girl',
//     'Spaceship',  'Strongest',
//     'Profit',     'Tripple',
//     'Stella',     'The Matrix',
//     'Bourne'
//   ]
  
//   )
books([
  'The Spot',
'4',
'Hunger Games',
'Harry Potter',
'Torronto',
'Spotify',
])