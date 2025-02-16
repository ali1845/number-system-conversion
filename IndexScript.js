// Global variables to track current state
let currentBase = 10; // Default to decimal
let currentInput = "";
let activeInput = "decNum"; // Default active input field

// Initialize the calculator
window.onload = function() {
    clearInputs();
    disableAllInputs();
    enableNumberButtons(true); // Enable all number buttons by default
};

// Function to handle number and letter inputs
function values(val) {
    if (isValidInput(val)) {
        currentInput += val.toString();
        updateActiveInput();
        convertAndDisplay();
    }
}

// Validate input based on current base
function isValidInput(val) {
    switch(currentBase) {
        case 2: // Binary
            return val === 0 || val === 1;
        case 8: // Octal
            return val >= 0 && val <= 7;
        case 16: // Hexadecimal
            return (val >= 0 && val <= 9) || /^[a-f]$/.test(val.toString().toLowerCase());
        case 10: // Decimal
            return val >= 0 && val <= 9;
        default:
            return false;
    }
}

// Convert and display values in all bases
function convertAndDisplay() {
    let decimalValue;
    
    // Convert current input to decimal first
    switch(currentBase) {
        case 2:
            decimalValue = parseInt(currentInput, 2);
            break;
        case 8:
            decimalValue = parseInt(currentInput, 8);
            break;
        case 16:
            decimalValue = parseInt(currentInput, 16);
            break;
        case 10:
            decimalValue = parseInt(currentInput, 10);
            break;
    }

    // Update all input fields
    if (!isNaN(decimalValue)) {
        document.getElementById("binNum").value = decimalValue.toString(2);
        document.getElementById("octNum").value = decimalValue.toString(8);
        document.getElementById("hexNum").value = decimalValue.toString(16).toUpperCase();
        document.getElementById("decNum").value = decimalValue.toString(10);
    }
}

// Base selection functions
function onBinary() {
    setActiveBase(2, "binNum");
}

function onOctal() {
    setActiveBase(8, "octNum");
}

function onHexadecimal() {
    setActiveBase(16, "hexNum");
}

function onDecimal() {
    setActiveBase(10, "decNum");
}

// Set active base and update UI
function setActiveBase(base, inputId) {
    currentBase = base;
    activeInput = inputId;
    currentInput = "";
    clearInputs();
    updateButtonStates();
    highlightActiveSystem();
}

// Update which number buttons are enabled based on current base
function updateButtonStates() {
    const numbers = document.querySelectorAll('.numbers button');
    const hexLetters = document.querySelectorAll('.hex-letters button');
    
    // Disable all buttons first
    numbers.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
    });
    
    hexLetters.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled');
    });

    // Enable appropriate buttons based on current base
    numbers.forEach(btn => {
        const num = parseInt(btn.textContent);
        if (
            (currentBase === 2 && num <= 1) ||
            (currentBase === 8 && num <= 7) ||
            (currentBase === 10) ||
            (currentBase === 16)
        ) {
            btn.disabled = false;
            btn.classList.remove('disabled');
        }
    });

    // Enable hex letters only for hex mode
    if (currentBase === 16) {
        hexLetters.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('disabled');
        });
    }
}

// Highlight active number system button
function highlightActiveSystem() {
    const systemButtons = document.querySelectorAll('.system-btn');
    systemButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    let activeButton;
    switch(currentBase) {
        case 2:
            activeButton = 'Binary';
            break;
        case 8:
            activeButton = 'Octal';
            break;
        case 16:
            activeButton = 'Hexadecimal';
            break;
        case 10:
            activeButton = 'Decimal';
            break;
    }

    document.querySelector(`.system-btn:contains('${activeButton}')`).classList.add('active');
}

// Update the active input field
function updateActiveInput() {
    document.getElementById(activeInput).value = currentInput;
}

// Clear all input fields
function clearInputs() {
    document.getElementById("binNum").value = "";
    document.getElementById("octNum").value = "";
    document.getElementById("hexNum").value = "";
    document.getElementById("decNum").value = "";
    currentInput = "";
}

// Disable all input fields (they should be readonly)
function disableAllInputs() {
    document.getElementById("binNum").readOnly = true;
    document.getElementById("octNum").readOnly = true;
    document.getElementById("hexNum").readOnly = true;
    document.getElementById("decNum").readOnly = true;
}

// Delete last character
function del() {
    currentInput = currentInput.slice(0, -1);
    updateActiveInput();
    convertAndDisplay();
}

// Equal button function
function equal() {
    convertAndDisplay();
}