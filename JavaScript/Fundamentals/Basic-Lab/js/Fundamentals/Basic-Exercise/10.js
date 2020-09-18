function calculatesResources(base, increment) {
    let hightOfPyramid = 0;
    let stone = 0;
    let stoneLayer = 0;
    let gold = 0;
    let goldLayer = 0;
    let marbleLayer = 0;
    let marble = 0;
    let numberOfLazuliLayers = 0;
    let lazuliLayer = 0;
    let lazuli = 0;
    for (let i = base; i > 0; i -= 2) {
        hightOfPyramid++;
        gold = i;
        stoneLayer = ((i - 2) * (i - 2)) * increment;
        stone += stoneLayer;
        marbleLayer = (4 * i - 4) * increment;
        marble += marbleLayer;
        if (hightOfPyramid % 5 === 0){
            numberOfLazuliLayers++;
            lazuliLayer = (4 * i - 4) * increment;
            lazuli += lazuliLayer;
        }
    }
    goldLayer = gold * gold * increment;
    if (base % 2 === 0){
        marble -= goldLayer;
    } else {
        stone -= goldLayer; 
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble - lazuli)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(goldLayer)}`);
    console.log(`Final pyramid height: ${Math.floor(hightOfPyramid * increment)}`);
}
// function calculatesResources(base, increment){
//     let stone = 0;
//     let marble = 0;
//     let lapisLazuli = 0;
//     let gold = 0;
//     let hightOfPyramid = 0;

//     console.log(`Stone required: ${Math.ceil(stone)}`);
//     console.log(`Marble required: ${Math.ceil((marble - lazuli) * increment)}`);
//     console.log(`Lapis Lazuli required: ${Math.ceil(lazuli * increment)}`);
//     console.log(`Gold required: ${Math.ceil(goldLayer)}`);
//     console.log(`Final pyramid height: ${Math.floor(hightOfPyramid * increment)}`);

// }

calculatesResources(11, 1);
calculatesResources(11, 0.75);

calculatesResources(12, 1);

calculatesResources(24, 1);

