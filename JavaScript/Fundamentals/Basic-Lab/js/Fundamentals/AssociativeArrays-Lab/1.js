function solve (info){
    let phonebook = {};
    for(let line of info){
        let [name, phone] = line.split(' ');
        phonebook[name] = phone;
    }
    for(let i in phonebook){
        console.log(`${i} -> ${phonebook[i]}`);
    }
}
solve (['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)