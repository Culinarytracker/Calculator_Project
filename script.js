

function add(a, b) {
    return a+b;
}

function multiply(a, b) {
    return a*b;
}

function subtract(a,b) {
    return a-b;
}

function divide(a, b) {
    return a/b;
}

document.querySelector('#numeric_buttons').addEventListener('click', (e) => {
    if (e.target.classList.contains("button")) {
        console.log(`You clicked ${e.target.textContent}`);
        let display = document.querySelector('#numeric_display');
        display.textContent = display.textContent + e.target.textContent;
    }
});