function trip(input) {
    let budget = +input.shift();
    let season = input.shift();
    let destination;
    let sum;
    let place;
    if (budget <= 100) {
        destination = 'Bulgaria';
        switch (season) {
            case 'summer':
                sum = budget * 0.3;
                place = 'Camp'
                break;
            case 'winter':
                sum = budget * 0.7;
                place = 'Hotel'
                break;
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        switch (season) {
            case 'summer':
                sum = budget * 0.4;
                place = 'Camp'
                break;
            case 'winter':
                sum = budget * 0.8;
                place = 'Hotel'
                break;
        }
    } else {
        destination = 'Europe';
        switch (season) {
            case 'summer':
            case 'winter':
                sum = budget * 0.9;
                place = 'Hotel'
                break;
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${sum.toFixed(2)}`);
}
trip(['1500', 'summer'])