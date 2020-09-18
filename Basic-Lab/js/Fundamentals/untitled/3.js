function solve(arr){
    let inventory = arr.shift().split(', ');
    function search(x, y){
        let match = false;
        let i;
        for (let index in x){
            if (y === x[index]){
                match = true;
                i = index;
            }
        }
                if (match){
                    return i;
                } else {
                    return false;
                }
    }
    for (let commands of arr){
        let [command, item] = commands.split(' - ')
        switch(command){
            case 'Collect':
                if (search(inventory, item)){
                    continue;
                }
                inventory.push(item);
                break;
            case 'Drop':
                if (search(inventory, item)){
                    inventory.splice(Number(search(inventory, item)), 1);
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');
                if (search(inventory, oldItem)){
                    inventory.splice(Number(search(inventory, oldItem) + 1), 0, newItem);
                }
                break;
            case 'Renew':
                if (search(inventory, item)){
                    inventory.splice(Number(search(inventory, item)), 1);
                    inventory.push(item);
                }
                break;
            case 'Craft!':
                break; 
        }
        
    }
    console.log(inventory.join(', '));
}
// solve([
//     'Iron, Sword',
//     'Drop - Bronze',
//     'Combine Items - Sword:Bow',
//     'Renew - Iron',
//     'Craft!'
//   ]
//   )

  solve([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ])