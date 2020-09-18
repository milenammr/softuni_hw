function cake (input) {
    let lenght = +input.shift();
    let width = +input.shift();
    let cake = lenght * width;
    let pieces;
    while (cake > 0) {
        pieces = input.shift();
        if (pieces === 'STOP') {
            console.log (`${cake} pieces are left.`);
            break;
        }
        pieces = Number(pieces);
        cake -= pieces;
        if (cake < 0) {
        console.log (`No more cake left! You need ${Math.abs(cake)} pieces more.`);
        }
    }
}

cake ([ '10', '2', '2', '4', '6', 'STOP' ]

  )