function Calculator() {
const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator__keys');

    let operand = 0;
    let operator = '';
    let needs_clear = true;

    keys.addEventListener(
        'click', 
        function(event) {
            let display = document.querySelector(".calculator__display");
            let displayed = display.textContent;
            if (event.target.matches('button')) {
                console.log("click");
                let key = event.target;
                let action = key.dataset.action;
                if (!action) {
                    console.log("number key");
                    let digit = key.textContent;
                    if (needs_clear || displayed == "0") { 
                        display.textContent = digit;
                    } else {
                        display.textContent += digit;
                    }
                } else if (action == 'decimal') {
                    if (displayed.indexOf('.') >= 0) {
                        console.log('already a dot');
                    } else if (displayed == '0') {
                        display.textContent = '.';
                    } else {
                        display.textContent += '.';
                    }
                } else if (action == 'clear') {
                    display.textContent = '0';

                } else if (action == 'calculate') {
                    let result = operator(parseInt(operand), 
                                          parseInt(displayed));
                    display.textContent = `${result}`;
                } else if (action == 'divide') {
                    operand = displayed;
                    operator = (x, y) => (x / y);
                    display.textContent = '0';
                } else if (action == 'multiply') {
                    operand = displayed;
                    operator = (x, y) => (x * y);
                    display.textContent = '0';
                } else if (action == 'substract') {
                    operand = displayed;
                    operator = (x, y) => (x - y);
                    display.textContent = '0';
                } else if (action == 'add') {
                    operand = displayed;
                    operator = (x, y) => (x + y);
                    display.textContent = '0';
                }
            }
        })
}

window.addEventListener("load", Calculator);
