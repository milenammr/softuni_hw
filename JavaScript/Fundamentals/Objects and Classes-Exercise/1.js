function solve(arr){
    let obj = {};
    for (let i in arr){
        obj.name = arr[i];
        obj.number = arr[i].length;
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.number}`);
    }
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )