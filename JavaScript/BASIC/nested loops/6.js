function bulding (input){
    let floor = +input.shift();
    let space = +input.shift();
    let apartments = '';
    let offices = '';
    let large = '';
    for (let i = floor; i >= 1; i--){
        for (let z = 0; z < space; z++){
            if (i == floor){
                large += `L${i}${z} `
                if (z+1 == space){
                    console.log(large);
                }             
            } else if (i % 2 == 0){
                offices += `O${i}${z} `
                if (z+1 == space){
                    console.log(offices);
                }                                       
            } else {
                apartments += `A${i}${z} `
                if (z+1 == space){
                    console.log(apartments);
                }                            
            }                          
        }
        large = '';
        offices = ''; 
        apartments = '';
    }   
}
bulding (['4', '4'])