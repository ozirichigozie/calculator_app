const calculatorFunction = document.getElementById('result')

    function display(val) {
        calculatorFunction.value += val;
    }

    function solve() {
        let x = calculatorFunction.value
        let y = eval(x);
        calculatorFunction.value = y
    }

    function clearScreen() {
        calculatorFunction.value = ''
    }

function darkModeFunction() {
    var element = document.body;
    element.classList.toggle("darkMode");
    }
