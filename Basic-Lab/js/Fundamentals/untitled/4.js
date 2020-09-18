function solve(arr){
    let inventory = arr.shift().split(', ');
    for (let commands of arr){
        let [command, item] = commands.split(' - ')
        switch(command){
            case 'Collect':
                if (inventory.indexOf(item) >= 0){
                    continue;
                }
                inventory.push(item);
                break;
            case 'Drop':
                if (inventory.indexOf(item) >= 0){
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');
                if (inventory.indexOf(oldItem) >= 0){
                    inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem);
                }
                break;
            case 'Renew':
                if (inventory.indexOf(item) >= 0){
                    inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(item);
                }
                break;
            case 'Craft!':
                break; 
        }
        
    }
    console.log(inventory.join(', '));
}
solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  )

  solve([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ])