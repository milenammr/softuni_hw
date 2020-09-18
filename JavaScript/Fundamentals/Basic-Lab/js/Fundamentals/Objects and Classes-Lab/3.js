function solve(input){
    let person = JSON.parse(input);
    for(let i in person){
        console.log(`${i}: ${person[i]}`);

    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')