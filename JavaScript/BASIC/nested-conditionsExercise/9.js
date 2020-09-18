function exam (input){
let startH = +input.shift();
let startM = +input.shift();
let comeH = +input.shift();
let comeM = +input.shift();
if (comeH == startH && comeM <= startM){
    console.log(`On time`);
}
}
exam ([9,30,9,50])