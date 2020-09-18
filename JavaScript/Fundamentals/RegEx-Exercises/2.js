function solve(race){
    let participants = race.shift().split(', ');
    let currentParticipant = race.shift();
    let sum = 0;
    let racer = {};
    while(currentParticipant !== 'end of race'){
        let wrongPattern = /[^\w+]/g;
        let namePattern = /[^a-zA-z]/g;
        let digitPattern = /[a-zA-z]/g;
        currentParticipant = currentParticipant.replace(wrongPattern, '');
        let name = currentParticipant.replace(namePattern, '');
        let numbers = currentParticipant.replace(digitPattern, '');
        for(let i of numbers){
            sum += Number(i);
        }
        if (participants.includes(name)){          
            let keys = Object.keys(racer);
            if(keys.includes(name)){
                racer[name] += sum;
            } else {
                racer[name] = sum;
            }
        }
        sum = 0;
        currentParticipant = race.shift();
    }
    let topRacers = Object.entries(racer).sort((a, b) => {
        return b[1] - a[1];
    })
    topRacers = topRacers.slice(0, 3);
    let counter = 0;
    for(let i of topRacers){

        counter++;
        
            switch (counter){
                case 1:
                    console.log(`${counter}st place: ${i[0]}`);
                break;
                case 2:
                    console.log(`${counter}nd place: ${i[0]}`);
                break;
                case 3:
                    console.log(`${counter}rd place: ${i[0]}`);
                break;
            }
        
    }
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]
  )