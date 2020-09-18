function printMatrix(num){
    function printNum(){
        let rowNumbers = '';
        for (let i = 0; i < num; i++){
            rowNumbers += `${num} `;
        }
        console.log(rowNumbers);
    } 
    for (let i = 0; i < num; i++){
        printNum();
    }
}
printMatrix(6);