function solve(input){
    let students = {};
    let num = 0;
    for (let line of input){
        let studentinfo = line.split(' ');
        let studentName = studentinfo.shift();
        for(let i of studentinfo){
            num += Number(i);  
        }
        num = num / studentinfo.length;
        students[studentName] = num;
        num = 0;
    }
    console.log(num);
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)