function solve(json){
    class Dictionary{
        term = '';
        definition = '';
        constructor(term, definition){
            this.term = term;
            this.definition = definition;
        }
    }
    let arr = [];
    let obj = {};
    for (let line of json){
        let objLine = JSON.parse(line);
        let term = Object.keys(objLine).toString();
        let definition = Object.values(objLine).toString();
        obj = new Dictionary(term, definition);
        // dictionary[term] = definition;          
        arr.push(obj);
    }
    arr.sort(function(a, b) {
        var nameA = a.term.toUpperCase(); // ignore upper and lowercase
        var nameB = b.term.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
    arr.forEach(x => {        
        console.log(`Term: ${x.term} => Definition: ${x.definition}`);
    });
    }  

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Coffee":"fgh."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )