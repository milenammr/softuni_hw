function compare(firstArr, secondArr){
    for (let common1 of firstArr){
        for (let common2 of secondArr){
            if (common1 === common2){
                console.log(common1);
            }
        }
    }
}
compare(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)