heroes = [
    {name: 'SirMullich', HP: 100, MP: 40},
    {name: 'Adela', HP: 80, MP: 200},
    {name: 'Bdela', HP: 23, MP: 200},
    {name: 'Tdela', HP: 54, MP: 200},
    {name: 'Cdela', HP: 54, MP: 200},
]
let newheroes = heroes.sort(function(a, b) {
    if (a.HP < b.HP){
        return 1;
    } else if (a.HP > b.HP){
        return -1;
    } else {
        return a.name.localeCompare(b.name);
    }
});
console.log(newheroes);