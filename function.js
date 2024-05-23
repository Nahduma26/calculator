

const calculatorButtons = document.querySelector(".calculator");
const text = document.querySelector(".text")

let operandOne = 0;
let calcOperator = null;
let operandTwo = 0;
let result = 0;
let numberButtons = [];
let subtractButton = null;
let addButton = null;
let multiplyButton = null;
let divideButton = null;
let decimalButton = null;


function add(numOne, numTwo){
    return eval(numOne + numTwo);
}

function subtract(numOne, numTwo){
    return eval(numOne - numTwo);
}

function multiply(numOne, numTwo){
    return eval(numOne * numTwo);
}

function divide(numOne, numTwo){
    return eval(numOne/numTwo);
}



function operate(numOne, operator, numTwo)
{
    if (operator == "add")
    {
        return add(numOne, numTwo);
    }

    if (operator == "subtract")
    {
        return subtract(numOne, numTwo);
    }

    if (operator == "multiply")
    {
        return multiply(numOne, numTwo);
    }

    if (operator == "divide")
    {
        return divide(numOne, numTwo);
    }
}

function makeCalculator()
{
    let value = 0;
    for (let i = 0; i < 4; i++) {
        let row = document.createElement("div");
        row.className = "calculatorRow";
        row.id = "r" + i;
        calculatorButtons.appendChild(row);
        for (let j = 0; j < 3; j++) {
            let button = document.createElement("button");
            button.className = "button";
            button.textContent = value;
            button.id = value;
            row.appendChild(button);
            value++;
        }
    }

    let rows = document.querySelectorAll(".calculatorRow");
    let buttons = document.querySelectorAll(".button");
    document.getElementById("9").textContent = '.';
    document.getElementById("9").id = 'decimal';
    decimalButton = document.getElementById('decimal');
    document.getElementById("10").textContent = 9;
    document.getElementById("10").id = 9;
    document.getElementById("11").textContent = '=';
    document.getElementById("11").id = 'equals';
    divideButton = document.createElement("button");
    divideButton.className = "button";
    divideButton.textContent = "/"
    divideButton.id = "divide";
    document.getElementById("r0").appendChild(divideButton);
    multiplyButton = document.createElement("button");
    multiplyButton.className = "button";
    multiplyButton.textContent = "x"
    multiplyButton.id = "multiply";
    document.getElementById("r1").appendChild(multiplyButton);
    subtractButton = document.createElement("button");
    subtractButton.className = "button";
    subtractButton.textContent = "-"
    subtractButton.id = "subtract";
    document.getElementById("r2").appendChild(subtractButton);
    addButton = document.createElement("button");
    addButton.className = "button";
    addButton.textContent = "+"
    addButton.id = "add";
    document.getElementById("r3").appendChild(addButton);


    console.log(rows.length);
    console.log(buttons.length);
}

document.addEventListener("DOMContentLoaded", function() {
    makeCalculator();
    let equalsButton = document.getElementById('equals');
    let clearButton = document.getElementById('clear');

    
    for (let i = 0; i <= 9; i++) {
        numberButtons.push(document.getElementById(i.toString()));
    }

    numberButtons.forEach(button => {
        button.addEventListener('click', event => {
            if (result != null)
            {
                text.textContent = button.textContent;
            }
            else {
                text.textContent += button.textContent;
            }
            console.log(button.textContent);
        });
    });

    clearButton.addEventListener('click', event => {
        text.textContent = "";
        calcOperator = null;
        operandOne = 0;
        operandTwo = 0;
    });
    decimalButton.addEventListener('click', event => {
        text.textContent += '.';
    });
   subtractButton.addEventListener('click', event => {
    handleOperatorClick("subtract");
    // calcOperator = "subtract"
    // operandOne = text.textContent;
    // text.textContent = "";
    // numberButtons.forEach(button => {
    //     button.addEventListener('click', event => {
    //         text.textContent += button.textContent;
    //         console.log(button.textContent);
    //     });
    // });
    // equalsButton.addEventListener('click', event => {
    //     operandTwo = text.textContent;
    //     result = operate(operandOne, calcOperator, operandTwo);
    //     text.textContent = result;
    // })
   }); 

   addButton.addEventListener('click', event => {
    handleOperatorClick("add");
    // calcOperator = "add"
    // operandOne = text.textContent;
    // text.textContent = "";
    // numberButtons.forEach(button => {
    //     button.addEventListener('click', event => {
    //         text.textContent += button.textContent;
    //         console.log(button.textContent);
    //     });
    // });
    // equalsButton.addEventListener('click', event => {
    //     operandTwo = text.textContent;
    //     result = operate(operandOne, calcOperator, operandTwo);
    //     text.textContent = result;
    // })
   }); 

   const handleOperatorClick = (operator) => {
    calcOperator = operator;
    operandOne = parseFloat(text.textContent);
    text.textContent = "";
    };

   multiplyButton.addEventListener('click', event => {
    handleOperatorClick("multiply");
    // operandOne = text.textContent;
    // text.textContent = "";
    // numberButtons.forEach(button => {
    //     button.addEventListener('click', event => {
    //         text.textContent += button.textContent;
    //         console.log(button.textContent);
    //     });
    // });
    // equalsButton.addEventListener('click', event => {
    //     operandTwo = text.textContent;
    //     result = operate(operandOne, calcOperator, operandTwo);
    //     text.textContent = result;
    // })
   }); 

   divideButton.addEventListener('click', event => {
    handleOperatorClick("divide");
    // calcOperator = "divide"
    // operandOne = text.textContent;
    // text.textContent = "";
    // numberButtons.forEach(button => {
    //     button.addEventListener('click', event => {
    //         text.textContent += button.textContent;
    //         console.log(button.textContent);
    //     });
    // });
    // equalsButton.addEventListener('click', event => {
    //     operandTwo = text.textContent;
    //     result = operate(operandOne, calcOperator, operandTwo);
    //     text.textContent = result;
    // })
   }); 

   equalsButton.addEventListener('click', event => {
    operandTwo = parseFloat(text.textContent);
    result = operate(operandOne, calcOperator, operandTwo);
    text.textContent = result;
    })
});
