let line = ""
let result = document.querySelector('#result')

let numberButtons = document.querySelectorAll('.number') 
let operationButtons = document.querySelectorAll('.operation')
let dot = document.querySelector('.dot')
let equals = document.querySelector('.equals')
let clear = document.querySelector('.clear')
let deleteButton = document.querySelector('.deleteOne')

numberButtons.forEach(el => {
    el.addEventListener('click', addNumber)
})

operationButtons.forEach(el => {
    el.addEventListener('click', operation)
})

dot.addEventListener('click', () => {
    if (line.length == 0) {
        return
    }

    if (line.at(-1) == '+' || line.at(-1) == '-' || line.at(-1) == '*' || line.at(-1) == '/' || line.at(-1) == '.') {
        return
    }

    let lineElements = line.split('')

    for (let i = lineElements.length - 1; i >= 0; i--) {
        if (line[i] == '.') {
            return
        } else if (line[i] == '+' || line[i] == '-' || line[i] == '*' || line[i] == '/') {
            line += '.'
            result.value = line
            return
        }
    }

    line += '.'
    result.value = line
})

equals.addEventListener('click', () => {
    if (line.at(-1) != '+' && line.at(-1) != '-' && line.at(-1) != '*' && line.at(-1) != '/' && line.at(-1) != '.') {
        let res = eval(line)
        line = String(res)
        result.value = res
    }
})

clear.addEventListener('click', () => {
    line = ''
    result.value = ''
})

deleteButton.addEventListener('click', () => {
    if (line.length == 0) {
        return
    }

    if (line.length == 1) {
        line = ''
        result.value = ''
    }

    line = line.substring(0, line.length - 1)
    result.value = line
})

function addNumber() {
    let number = this.getAttribute('value')
    line += number
    result.value = line
}

function operation() {
    let operation = this.getAttribute('value')

    if (line.length == 0 && operation != '-') {
        return
    }
    
    if (line.at(-1) != '+' && line.at(-1) != '-' && line.at(-1) != '*' && line.at(-1) != '/' && line.at(-1) != '.') {
        line += operation
        result.value = line
    }
}