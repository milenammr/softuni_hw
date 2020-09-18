function solve(arr){
    let n = Number(arr.shift());
    let heroes = [];
    for (let i = 0; i < n; i++){
        let [name, HP, MP] = arr.shift().split(' ');
        let hero = {
            name: name,
            HP: Number(HP),
            MP: Number(MP),
        }
        heroes.push(hero);
    }
    let line = arr.shift();
    while(line !== "End"){
        let [command, heroName, one, two] = line.split(' - ');
        switch(command){
            case 'CastSpell':
                for(let i of heroes){
                    if (i.name === heroName){
                        if(i.MP >= one){
                            i.MP -= one;
                            console.log(`${heroName} has successfully cast ${two} and now has ${i.MP} MP!`);
                        } else {
                            console.log(`${heroName} does not have enough MP to cast ${two}!`);
                        }
                    }
                }
                break;
            case 'TakeDamage':
                for (let i = 0; i < heroes.length; i++){
                    if (heroes[i].name === heroName){
                        heroes[i].HP -= Number(one);
                        if(heroes[i].HP <= 0){
                            heroes.splice(i, 1);
                            console.log(`${heroName} has been killed by ${two}!`);
                            break;
                        }
                        console.log(`${heroName} was hit for ${one} HP by ${two} and now has ${heroes[i].HP} HP left!`);
                    }
                }
                break;
            case 'Recharge':
                for(let i of heroes){
                    if (i.name === heroName){
                        let old = i.MP;
                        i.MP += Number(one);
                        if (i.MP > 200){
                            i.MP = 200;
                            console.log(`${heroName} recharged for ${200 - old} MP!`);
                            break;
                        } else {
                            console.log(`${heroName} recharged for ${one} MP!`);

                        }
                    }
                }
                break;
            case 'Heal':
                for(let i of heroes){
                    if (i.name === heroName){
                        let old = i.HP;
                        i.HP += Number(one);
                        if (i.HP > 100){
                            i.HP = 100;
                            console.log(`${heroName} healed for ${100 - old} HP!`);
                        } else {

                            console.log(`${heroName} healed for ${one} HP!`);
                        }
                    }
                }
                break;
        }
        line = arr.shift();
    }
    heroes = heroes.sort(function(a, b) {
        if (a.HP < b.HP){
            return 1;
        } else if (a.HP > b.HP){
            return -1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });
    for(let i of heroes){
        console.log(i.name);
        console.log(`  HP: ${i.HP}`);
        console.log(`  MP: ${i.MP}`);
    }
}
// solve([
// '2',
// 'Solmyr 85 120',
// 'Kyrre 99 50',
// 'Heal - Solmyr - 10',
// 'Recharge - Solmyr - 50',
// 'TakeDamage - Kyrre - 66 - Orc',
// 'CastSpell - Kyrre - 15 - ViewEarth',
// 'End',
    
// ])

solve([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
  ]
  )