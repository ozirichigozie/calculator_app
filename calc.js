function display(val) {
    //Create a list of all operators of the calculator
    let operators = [...document.querySelectorAll('.operator')].map(el => el.textContent);
    
    //Get the current value
    let resultElement = document.querySelector('#result');
    let currentResult = resultElement.value;
    
    //When the input is an operator and the last character of the result is an operator then overwrite it, otherwise append it.
    if(operators.includes(val) && operators.includes(currentResult.charAt(currentResult.length - 1))) {
      resultElement.value = currentResult.substring(0, currentResult.length - 1) + val;
    }
    else {
      resultElement.value += val;
    }
  }
  
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
