function solve(firstName, lastName, age){
    let obj = {};
    obj.firstName = firstName;
    obj.lastname = lastName;
    obj.age = age;
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`);
    }
}
solve("Peter", 
"Pan",
"20"
)