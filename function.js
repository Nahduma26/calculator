const calculatorButtons = document.querySelector(".calculator");
const displayScreen = document.querySelector(".screen")

let operandOne = 0;
let calcOperator = null;
let operandTwo = 0;


function add(numOne, numTwo){
    return numOne + numTwo;
}

function subtract(numOne, numTwo){
    return numOne - numTwo;
}

function multiply(numOne, numTwo){
    return numOne * numTwo;
}

function divide(numOne, numTwo){
    return numOne/numTwo;
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
    document.getElementById("10").textContent = 9;
    document.getElementById("10").id = 9;
    document.getElementById("11").textContent = '=';
    document.getElementById("11").id = 'equals'
    let divideButton = document.createElement("button");
    divideButton.className = "button";
    divideButton.textContent = "/"
    divideButton.id = "divide";
    document.getElementById("r0").appendChild(divideButton);
    let multiplyButton = document.createElement("button");
    multiplyButton.className = "button";
    multiplyButton.textContent = "x"
    multiplyButton.id = "multiply";
    document.getElementById("r1").appendChild(multiplyButton);
    let subtractButton = document.createElement("button");
    subtractButton.className = "button";
    subtractButton.textContent = "-"
    subtractButton.id = "subtract";
    document.getElementById("r2").appendChild(subtractButton);
    let addButton = document.createElement("button");
    addButton.className = "button";
    addButton.textContent = "+"
    addButton.id = "add";
    document.getElementById("r3").appendChild(addButton);
    console.log(rows.length);
    console.log(buttons.length);
}