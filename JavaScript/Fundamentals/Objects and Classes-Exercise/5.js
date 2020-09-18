function solve(arr){
    let obj = {};
    let arr2 = [];
    for(let i of arr){
        let [hero, level, ...items] = i.split(' / ');
        items = items[0].split(', ').sort();
        obj = {
            hero: hero,
            level: level,
            items: items,
        };
        arr2.push(obj);
    }
    arr2.sort(function (a, b) {
        return a.level - b.level;
      });
    for(let i of arr2){
        console.log(`Hero: ${i.hero}`);
        console.log(`level => ${i.level}`);
        console.log(`items => ${i.items.join(', ')}`);
    }
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    )