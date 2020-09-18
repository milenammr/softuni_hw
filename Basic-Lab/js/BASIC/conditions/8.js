function money (input){

    let dohod = Number(input.shift());
    let uspeh = Number(input.shift());
    let mindohod = Number(input.shift());

    let stipendiaUspeh = uspeh * 25;
    let stipendiaSocial = mindohod * 0.35;
    
    if (uspeh >= 5.50 && dohod < mindohod){

        if (stipendiaUspeh > stipendiaSocial){

            console.log (`You get a scholarship for excellent results ${Math.floor(stipendiaUspeh)} BGN`);

        } else {

            console.log (`You get a Social scholarship ${Math.floor(stipendiaSocial)} BGN`);
        }

    } else if (uspeh >= 5.50){
        
        console.log (`You get a scholarship for excellent results ${Math.floor(stipendiaUspeh)} BGN`);

            
    } else if (uspeh > 4.50 && dohod < mindohod){

       
        console.log (`You get a Social scholarship ${Math.floor(stipendiaSocial)} BGN`);

    } else {

        console.log (`You cannot get a scholarship!`);

    }
}

money ([480.00,
    4.60,
    4560.00])