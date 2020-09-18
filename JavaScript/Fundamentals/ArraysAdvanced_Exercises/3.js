function party(arr){
    let list = [];
    for (let i in arr){
        let people = arr[i].split(' ');
        if (people.includes('not')){
            if (list.includes(people[0])){
                let i = list.indexOf(people[0]);
                list.splice(i, 1); 
            } else {

                console.log(`${people[0]} is not in the list!`);
            }
        } else {
            if (list.includes(people[0])){
                console.log(`${people[0]} is already in the list!`);
            } else {

                list.push(people[0]);
            }
        }
    }
    for (let name of list){

        console.log(name);
    }
}
party(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])

party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)