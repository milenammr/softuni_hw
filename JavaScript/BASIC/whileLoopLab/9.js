function free (input){

let a = +input.shift();
let b = +input.shift();
let h = +input.shift();
let u = a * b * h;
let boxes = 0;

let box = input.shift();

while (box !== 'Done'){
    boxes = boxes + Number(box);
    if (u < boxes){
        console.log(`No more free space! You need ${Math.abs(u - boxes)} Cubic meters more.`);
        break;
    }
        
    
    box = input.shift();
}

    if (box === 'Done'){
        console.log(`${(u - boxes)} Cubic meters left.`);
    }
}

free([ '10', '1', '2', '4', '6', 'Done' ]
  )