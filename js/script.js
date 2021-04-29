/*
step 1: prompt pet name from user, store as variable (petname)
step 2: set levels to zero?
step 3: establish loop
step 4: prompt for pet options



*/
let petname = prompt("What is your pet's name?");



let energy = 0;
let happiness = 0;
for (let a = 0; a < 6; a++) {
    let action = prompt("Do you want to feed, pet, or walk your pet?");

    if (action === "feed") {
    energy = energy+2;
    }

    if (action === "pet") {
    happiness = happiness+1;
    }


    if (action === "walk") {
        if (energy < 1) {
            alert("Not enough energy for walk!");
        }
        else {
        happiness = happiness+2;
        energy = energy-1;
        }
    }
    /*console.log(energy);
    console.log(happiness);
    */
}  
console.log(petname + " has " + happiness + " happiness and " + energy + " energy.");









/* extra bits that might be useful?
for (let a = 0; a < 5; a++) {
    console.log("yo", a);
*/