// Counter variable
let counter = 0;

// --------------------
// Simple Functions
// --------------------

function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

// --------------------
// Simple For Loop
// --------------------

function runForLoop() {
    let result = "";

    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").textContent = result.trim();
}

// --------------------
// Repetition with Condition
// --------------------

function showOddNumbers() {
    let result = "";

    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddNumberResult").textContent = result.trim();
}

// --------------------
// Arrays
// --------------------

function addMultiplesToArray() {
    let multiples = [];

    if (counter >= 5) {
        for (let i = counter; i >= 5; i--) {
            if (i % 5 === 0) {
                multiples.push(i);
            }
        }
    }

    // Print the ARRAY itself (not each value)
    console.log(multiples);
}

// --------------------
// Objects and Form Fields
// --------------------

function printCarObject() {
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let car = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(car);
}

// --------------------
// Load Car Objects
// --------------------

function loadCar(carNumber) {
    let selectedCar;

    if (carNumber === 1) {
        selectedCar = carObject1;
    } else if (carNumber === 2) {
        selectedCar = carObject2;
    } else if (carNumber === 3) {
        selectedCar = carObject3;
    }

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}

// --------------------
// Changing Styles
// --------------------

function changeColor(colorChoice) {
    let paragraph = document.getElementById("styleParagraph");

    if (colorChoice === 1) {
        paragraph.style.color = "red";
    } else if (colorChoice === 2) {
        paragraph.style.color = "green";
    } else if (colorChoice === 3) {
        paragraph.style.color = "blue";
    }
}
