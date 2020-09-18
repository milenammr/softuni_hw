function save (input) {
 let moneyForTrip = +input.shift();
 let money = +input.shift();
 let operation;
 let sum;
 let counter = 0;
 let days = 0;

 while (moneyForTrip >= money) {
     operation = input.shift();
     sum = +input.shift();
     days++;

     if (operation === 'save') {
        money += sum;
        counter = 0;
     } else {
        money -= sum;
        if (money < 0) {
            money = 0;
        }
        counter++;
     }

     if (counter === 5) {
         console.log ("You can't save the money.");
         console.log (days);
         break;
     }
     if (money >= moneyForTrip) {
        console.log (`You saved the money for ${days} days.`);
     }
 }
}

save ([
    '1000',   '800',
    'spend', '50.08',
    'spend', '50',
    'save',  '0.01',
    'save',  '100',
    'save',  '0.01',
    'save',  '100',
    'spend', '50.08',
    'save',  '0.01',
    'save',  '100',
    'save',  '0.01',
    'save',  '100',
  ]

  )