function solve(arr){
    let n = Number(arr.shift());
    let plants = [];
    let flag = true;
    for (let i = 0; i < n; i++){
        let [plant, rarity] = arr.shift().split('<->');
        for (let i of plants){
            if (i.plant == plant){
                i.rarity = Number(rarity);
                flag = false;
            }
        }
        if (flag){

            let kind = {
                plant: plant,
                rarity: Number(rarity),
                rating: 0,
                count: 0,
            }
            plants.push(kind);
        }
        flag = true;
    }
    let line = arr.shift();
    while(line !== "Exhibition"){
        let [command, plant, space, secondCommand] = line.split(' ');
        switch (command){
            case 'Rate:':
                let counter = 0;
                for (let i of plants){
                    
                    if (i.plant == plant){
                        i.rating += Number(secondCommand);
                        i.count++;
                        counter++
                    } 
                    if (counter == 0) {
                        console.log("error");
                    }
                }
                break;
            case 'Update:':
                let counter2 = 0;
                for (let i of plants){
                    if (i.plant == plant){
                        i.rarity = Number(secondCommand);
                        counter2++
                    }
                    if (counter2 == 0) {
                        console.log("error");
                    }
                }
                break;
            case 'Reset:':
                let counter3 = 0;
                for (let i of plants){
                    if (i.plant == plant){
                        i.rating = 0;
                        counter3++
                    }
                    if (counter3 == 0) {
                        console.log("error");
                    }
                }
                break;
            default:
                console.log("error");
                break;
        }
        line = arr.shift();
    }
    for(let i of plants){
        if(i.rating != 0 && i.count != 0){
            i.rating = i.rating / i.count;

        }
    }
    plants = plants.sort(function (a, b){
        if (a.rarity < b.rarity){
            return 1;
        } else if (a.rarity > b.rarity){
            return -1;
        } else {
            return b.rating - a.rating;
        }
    })
    console.log('Plants for the exhibition:');
    for (let i of plants){
        console.log(`- ${i.plant}; Rarity: ${i.rarity}; Rating: ${i.rating.toFixed(2)}`);
    }
}
solve(
    [
        '5',
        'Arnoldii<->4',
        'Woodii<->7',
        'Woodii<->5',
        'Welwitschia<->2',
        'Welwitschia<->6',
        'Rate: Woodi - 10',
        'Rate: Welwitschia - 7',
        'Rate: Arnoldii - 3',
        'Rate: Woodii - 5',
        'Update: Woodii - 5',
        'Reset: Arnoldii',
        'Exhibition'
      ]
  )