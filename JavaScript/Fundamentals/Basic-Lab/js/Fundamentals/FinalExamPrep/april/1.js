// The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
// After that, until the "Generate" command is given, you will be receiving strings with instructions for 
// different operations that need to be performed upon the raw activation key.
// There are several types of instructions, split by ">>>":
// •	Contains>>>{substring} – checks if the raw activation key contains the given substring.
// o	If it does prints: "{raw activation key} contains {substring}".
// o	If not, prints: "Substring not found!"
// •	Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}
// o	Changes the substring between the given indices (the end index is exclusive) to upper or lower case. 
// o	All given indexes will be valid.
// o	Prints the activation key.
// •	Slice>>>{startIndex}>>>{endIndex}
// o	Deletes the characters between the start and end indices (end index is exclusive).
// o	Both indices will be valid.
// o	Prints the activation key.
// Input
// •	The first line of the input will be string and it will consist of letters and numbers only. 
// •	After the first line, until the "Generate" command is given, you will be receiving strings.
// Output
// •	After the "Generate" command is received, print:
// o	"Your activation key is: {activation key}"
// Examples

function solve(arr){
    let actKey = arr.shift();
    let [command, one, two, tree] = arr.shift().split('>>>');
    while (command !== "Generate"){
        switch(command){
            case 'Slice':
                let slice = actKey.substring(one, two);
                actKey = actKey.replace(slice, '');
                console.log(actKey);
                break;
            case 'Flip':
                if (one == 'Upper'){
                    let slice = actKey.substring(two, tree);
                    actKey = actKey.replace(slice, slice.toUpperCase());
                    console.log(actKey);
                }
                if (one == 'Lower'){
                    let slice = actKey.substring(two, tree);
                    actKey = actKey.replace(slice, slice.toLowerCase());
                    console.log(actKey);
                }
                break;
            case 'Contains':
                if (actKey.includes(one)){
                    console.log(`${actKey} contains ${one}`);
                } else {
                    console.log("Substring not found!");
                }
                break;
        }
        [command, one, two, tree] = arr.shift().split('>>>');
    }
    console.log(`Your activation key is: ${actKey}`);
}
solve(['abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
    ])

// abghijklmnopqrstuvwxyz
// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz
// Substring not found!
// Substring not found!
// Your activation key is: abgHIjkLMNOPQRstuvwxyz
