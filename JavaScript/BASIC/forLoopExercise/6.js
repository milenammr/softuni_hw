function salary (input) {
    let tabs = +input.shift();
    let salary = +input.shift();
    let facebook = 150;
    let instagram = 100;
    let reddit = 50;
    for (let i = 0; i < tabs; i++) {
        let fine = input[i];
        switch (fine){
            case 'Facebook':
                salary -= facebook;
            break;
            case 'Instagram':
                salary -= instagram;
            break;
            case 'Reddit':
                salary -= reddit;
            break;
        }
        if (salary <= 0){
            console.log('You have lost your salary.');
            break;
        }
    }
    if (salary > 0) {
        console.log(salary); 
    }
    
}

salary ([
    10,
500,
'Facebook',
'Stackoverflow.com',
'softuni.bg',
'Facebook','Facebook','Facebook',
  ]
  );