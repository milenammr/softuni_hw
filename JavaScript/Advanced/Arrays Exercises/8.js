function solve (arr){
    let dashboard = [
    [false, false, false], 
    [false, false, false], 
    [false, false, false]];
    let player1 = 'X';
    let player2 = 'O';
    let mark = player1;
    for (let i = 0; i < arr.length; i++){
        let coordinates = arr[i].split(' ');
        if (dashboard[coordinates[0]][coordinates[1]] == false){
            dashboard[coordinates[0]].splice([coordinates[1]], 1, mark);
            mark == player1 ? mark = player2 : mark = player1;
        } else {
            console.log("This place is already taken. Please choose another!");
        }
        //row win
        let winMatch = false;
        let endGame = false;
        dashboard.forEach(row => {
            let[firstR, secondR, thirdR] = row;
            if (firstR == secondR && secondR == thirdR && firstR && secondR && thirdR){
                winMatch = true;
                mark = firstR;
            }
            if (firstR && secondR && thirdR){
                endGame = true;
            } else {
                endGame = false;
            }
        })
                if (endGame){
                    console.log('The game ended! Nobody wins :(');
                    break;
                }
        //col win
        let index = 0;
        for (let i = 0; i < 3; i++){
            let col = [];
            dashboard.forEach(element => {
                col.push(element[index]);
            })
            index++;
            let [firstC, secondC, thirdC] = col;
            if (firstC == secondC && secondC == thirdC && firstC && secondC && thirdC){
                winMatch = true;
                mark = firstC;
            }
        }
        //mainDiag win
        let index2 = 0;
        let mainDiag = [];
        dashboard.forEach(element => {
            mainDiag.push(element[index2]);
            index2++;
        })
        let [firstM, secondM, thirdM] = mainDiag;
        if (firstM == secondM && secondM == thirdM && firstM && secondM && thirdM){
                winMatch = true;
                mark = firstM;
        }
        //diag win
        let index3 = 2;
        let diag = [];
        dashboard.forEach(element => {
            diag.push(element[index3]);
            index3--;
        })
        let [firstD, secondD, thirdD] = diag;
        if (firstD == secondD && secondD == thirdD && firstD && secondD && thirdD){
                winMatch = true;
                mark = firstD;
        }
        if(winMatch){
            console.log(`Player ${mark} wins!`);
            break;
        }
    }

    dashboard.forEach(element => console.log(element.join('\t')));
}
// solve(["0 1",
// "0 0",
// "0 2", 
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"]
// )

// solve(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// )

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)