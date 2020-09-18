function solve(arr){
    let list = arr.shift().split("!");
    function search(x, y){
        let result;
        for (let items = 0; items < x.length; items++){
            result = x[items] == y ? true : false;
            if (result == true){
                result = items;
                return result;
            }
        }
        return result;
    }
    for (let sentence of arr){
        let [command, item, newItem] = sentence.split(' ');
        
        switch (command){
            case 'Urgent':
                if (search(list, item) === false){
                list.unshift(item); 
                }    
                break;
            case 'Unnecessary': 
                if (search(list, item) || search(list, item) == 0){
                    list.splice(search(list,item), 1);
                } 
                break;
            case 'Correct': 
                if (search(list, item) || search(list, item) == 0){
                    list.splice(search(list,item), 1, newItem);
                } 
                break;
            case 'Rearrange': 
                if (search(list, item) || search(list, item) == 0){
                    list.push(item)
                    list.splice(search(list,item), 1)
                } 
                
                break;
            case 'Go': 
                break;
        }
    }
    console.log(list.join(', '));
}
// solve(['Tomatoes!Potatoes!Bread!Milk',
//     'Unnecessary Milk',
//     'Urgent Tomatoes',
//     'Go Shopping!']
//     )

solve(['Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes', 
    'Correct Pepper Onion',
    'Rearrange Water',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
    ])