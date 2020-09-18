function solve(input){
    let pattern = /(=\/)*(={1}|\/{1})(?<destination>[A-Z][a-z]{3,})\2(=\/)*/g;
    let valid = input.match(pattern);
    let destination = [];
    let tp = 0;
    if (valid !== null){
        for (let i of valid){
            let pattern = /[A-Z][a-z]{2,}/g;
            let newd = i.match(pattern);
            tp += newd[0].length;
            destination.push(newd);
        }
        console.log(`Destinations: ${destination.join(', ')}`);
        console.log(`Travel Points: ${tp}`);
    } else {

        console.log(`Destinations:`);
        console.log(`Travel Points: 0`);
    }
}
solve('=Hawai=/Cyprus//Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')