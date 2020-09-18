function move (input){
let width = +input.shift();
let lenght = +input.shift();
let hight = +input.shift();
let freeSpace = width * lenght * hight;
let allBoxes = 0;
let boxes = input.shift();
while (boxes !== 'Done'){
    
    allBoxes += +boxes;
    if (allBoxes > freeSpace){
        console.log(`No more free space! You need ${allBoxes - freeSpace} Cubic meters more.`);
        break;
    }   
    boxes = input.shift();
}
if (boxes === 'Done'){
    console.log(`${Math.abs(freeSpace - allBoxes)} Cubic meters left.`);
}

}
move ([
'    10',
'    1',
'    2',
'    4',
'    6',
'Done',
])