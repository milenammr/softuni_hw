function solve(phoneNumbers){
    let pattern = /(\+359 2 )\d{3} \d{4}\b|(\+359-2-)\d{3}-\d{4}\b/g;
    let validPhones = [];
    while ((validPhone = pattern.exec(phoneNumbers)) !== null){
        validPhones.push(validPhone[0]);
    }
    console.log(validPhones.join(', '));
}
solve("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")