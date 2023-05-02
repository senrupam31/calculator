let display = document.getElementsByName("display")[0];
let history = document.getElementsByName("history")[0];
let sqrt = Math.sqrt
function appendToDisplay(char) {
    display.value += char;
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay() {
    display.value = "";
    history.value = "";
}

function calculate() {
    if (display.value) {
        try {
            history.value = display.value
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    } else {
        display.value = ''
    }
}
