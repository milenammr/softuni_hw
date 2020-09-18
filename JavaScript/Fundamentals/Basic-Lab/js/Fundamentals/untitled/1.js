function solve(arr){
    let students = Number(arr.shift());
    let lectures = Number(arr.shift());
    let bonus = Number(arr.shift());
    let allBonuses = [];
    for (let i = 0; i < students; i++){
        let totalBonus = arr[i] / lectures * (5 + bonus);
        totalBonus = Math.ceil(totalBonus);
        allBonuses.push(totalBonus);
        totalBonus = 0;
    }   
    let maxBonus = Math.max(...allBonuses);
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${Math.max(...arr)} lectures.`);
}
solve([
    '10', '30', '14', '0',
    '23', '27', '28', '29',
    '17', '25', '26', '5',
    '18'
  ]
  
  )