function solve(input){
    let stops = input.shift();
    let line = input.shift();
    while(line !== 'Travel'){
        let [command, first, second] = line.split(':');
        
        switch(command){
            case 'Add Stop':
                first = Number(first);
                if (first < stops.length){
                    let slice1 = stops.substring(0, first);
                    let slice2 = stops.substring(first);
                    stops = slice1 + second + slice2;
                }
                console.log(stops);
                break;
            case 'Remove Stop':
                first = Number(first);
                second = Number(second);
                if (first < stops.length && second < stops.length){
                    let slice = stops.substring(first, second + 1);
                    stops = stops.replace(slice, '');
                }
                console.log(stops);
                break;
            case 'Switch':
                while(stops.includes(first)){
                    stops = stops.replace(first, second);
                }
                console.log(stops);
                break;
        }
        line = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
solve([
'Hawai::Cyprys-GreeceHawai',
'Add Stop:7:Rome',
'Remove Stop:11:16',
'Switch:Hawai:Bulgaria',
'Travel'
]


)