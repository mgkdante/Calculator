let firstNumber = 0
let secondNumber = 0
let operator = ''
let resultString = ''
let invinsibleCurrentResult = 0

const buttons = document.querySelectorAll('.button')
const result = document.querySelector('.result')


const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    try {
        if (b === 0) {
            alert('You can\'t divide by 0')
            throw new Error('You can\'t divide by 0')
        }
    }
    catch {
        return
    }
    return a / b
}

const operate = (operator, a, b) => {
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return subtract(a, b)
        case '*':
            return multiply(a, b)
        case '/':
            return divide(a, b)
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            if (operator === '') {
                firstNumber += button.textContent
                resultString += button.textContent
                result.textContent = resultString
            } else {
                secondNumber += button.textContent
                resultString += button.textContent
                result.textContent = resultString
            }
        }
        if (button.classList.contains('operator')) {
            if (firstNumber !== 0 && secondNumber !== 0) {
                invinsibleCurrentResult = operate(operator, parseInt(firstNumber), parseInt(secondNumber))
                firstNumber = invinsibleCurrentResult
                secondNumber = 0
                operator = button.textContent
                resultString += operator
                result.textContent = resultString
            }
            else {
            operator = button.textContent
            resultString += operator
            result.textContent = resultString
            }

        }
        if (button.classList.contains('equal')) {
            if (secondNumber === 0) {
                alert('You have to enter a second number')
            } else {
                result.textContent = operate(operator, parseInt(firstNumber), parseInt(secondNumber))
                resultString = result.textContent
                firstNumber = result.textContent
                secondNumber = 0
                operator = ''
            }
        }
        if (button.classList.contains('resetBtn')) {
            firstNumber = 0
            secondNumber = 0
            operator = ''
            resultString = ''
            result.textContent = resultString
        }
        console.log(firstNumber, operator, secondNumber)
    })
})