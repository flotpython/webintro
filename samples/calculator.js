Calculator = function () {
    const calculator = document.querySelector('.calculator');
    const keys = calculator.querySelector('.calculator__keys');

    keys.addEventListener(
        'click', 
        e => {
            let display = document.querySelector(".calculator__display");
            let displayed = display.textContent;
            if (e.target.matches('button')) {
                console.log("click");
                let key = e.target;
                let action = key.dataset.action;
                if (!action) {
                    console.log("number key");
                    let digit = key.textContent;
                    if (displayed == "0") { 
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
                    console.log("clearing");
                    display.textContent = '0';

                } else if (action == 'calculate') {

                } else if (action == 'divide') {

                } else if (action == 'multiply') {

                } else if (action == 'substract') {

                } else if (action == 'add') {

                }
            }
        })
}

window.addEventListener("load", Calculator);
