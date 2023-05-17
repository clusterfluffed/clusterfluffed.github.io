
//display the register or login sections based on the button pressed
document.querySelector('#new-baseline').addEventListener("click", () => {
    document.getElementById('baseline-reveal').hidden = false;
    document.getElementById('modify-baseline-reveal').hidden = true;
});

document.querySelector('#modify-baseline').addEventListener("click", () => {
    document.getElementById('baseline-reveal').hidden = true;
    document.getElementById('modify-baseline-reveal').hidden = false;
});

document.querySelector('#same-pressure-toggle').addEventListener("click", () => {

    if(document.getElementById('same-pressure-toggle').checked===true) {
        document.getElementById('individual-pressure-reveal').hidden = true;
        document.getElementById('same-tire-pressure').disabled = false;
    } else {
        document.getElementById('individual-pressure-reveal').hidden = false;
        document.getElementById('same-tire-pressure').disabled = true;
    }
});

// const driveSprocket = document.querySelector('#driver-sprocket');
const rearSprocket = document.querySelector('#rear-sprocket');
let calcDriveSprocket = 0;
let calcRearSprocket = 0;
let ratio = document.getElementById('gear-ratio');
let ratioDb = document.getElementById('gear-ratio-db');

document.querySelector('#drive-sprocket').addEventListener("change", () => {
    calcDriveSprocket = document.querySelector('#drive-sprocket').value;
    console.log(calcDriveSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.innerHTML = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
        ratioDb.value = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})

document.querySelector('#rear-sprocket').addEventListener("change", () => {
    calcRearSprocket = document.querySelector('#rear-sprocket').value;
    console.log(calcRearSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.innerHTML = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
        ratioDb.value = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})