function solve(arr){
    let line = arr.shift();
    let guests = [];
    let count = 0;
    while(line !== 'Stop'){
        let [command, name, meal] = line.split('-');
        let guest = {
            guest: '',
            meal: '',
            dislike: 0,
        }
        switch(command){
            case "Like":
                let dontexist = true;
                for(let i of guests){
                    if (i.guest.includes(name)){
                        i.meal += `, ${meal}`
                        dontexist = false;
                    } 
                }
                if (dontexist){
                    let guest = {
                        guest: name,
                        meal: meal,
                        dislike: 0,
                    }
                    guests.push(guest);
                }
                break;
            case 'Unlike':
                for(let i of guests){
                    if (i.guest.includes(name) == false){
                        console.log(`${name} is not at the party.`);
                        break;
                    }
                    if (i.meal.includes(meal)){
                        console.log(`${name} doesn't like the ${meal}.`);
                        i.meal = '';
                        i.dislike++;
                    } else {
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    }
                }
                break;
        }
        line = arr.shift();
    }
    guests = guests.sort(function (a, b){
        if (a.dislike < b.dislike){
            return 1;
        } else if (a.dislike > b.dislike){
            return -1;
        } else {
            return a.guest.localeCompare(b.guest);
        }
    })
    for(let i of guests){
        console.log(`${i.guest}: ${i.meal}`);
        count += i.dislike;
    }
    console.log(`Unliked meals: ${count}`);
}
// solve([
//     'Like-Krisi-shrimps',
//     'Like-Krisi-soup',
//     'Like-Misho-salad',
//     'Like-Pena-dessert',
//     'Stop'
//   ])

// solve([
//     'Like-Krisi-shrimps',
//     'Unlike-Vili-carp',
//     'Unlike-Krisi-salad',
//     'Unlike-Krisi-shrimps',
//     'Stop'
//   ]
//   )

  solve([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
  ]
  )