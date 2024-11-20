let turn = "X"
let count = 0
let game = 'on'

let victoryCombinations = [
    ['00', '01', '02'],
    ['10', '11', '12'],
    ['20', '21', '22'],
    ['00', '10', '20'],
    ['01', '11', '21'],
    ['02', '12', '22'],
    ['00', '11', '22'],
    ['02', '11', '20']
]

let currentGame = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
]

let cells = document.querySelectorAll('.cell')
let reset = document.querySelector('#reset')
let turnText = document.querySelector('.turn') 


cells.forEach(el => {
    el.addEventListener('click', add)
})

reset.addEventListener('click', () => {
    turn = "X"
    count = 0
    game = 'on'

    cells.forEach(el => {
        el.innerHTML = ''
    })

    currentGame = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i']
    ]
})

function add() {
    if (game == 'over') {
        alert('Game Over')
        return
    }

    if (this.innerHTML != '') {
        return
    }

    let rowId = +this.parentElement.id.split('')[1]
    let colId = +this.id.split('')[1]

    currentGame[rowId][colId] = turn

    if (turn == 'X') {
        this.innerHTML = 'X'
        count++

        turn = 'O'
        turnText.innerHTML = `${turn}'s turn`
    } else {
        this.innerHTML = 'O'
        turn = 'X'
        turnText.innerHTML = `${turn}'s turn`
    }

    if (count < 3) {
        return
    }

    for (let i = 0; i < victoryCombinations.length; i++) {
        let one = currentGame[+victoryCombinations[i][0].split('')[0]][+victoryCombinations[i][0].split('')[1]]
        let two = currentGame[+victoryCombinations[i][1].split('')[0]][+victoryCombinations[i][1].split('')[1]]
        let three = currentGame[+victoryCombinations[i][2].split('')[0]][+victoryCombinations[i][2].split('')[1]]
        
        if (one == two && two == three && one == three) {
            game = 'over'
            alert('Victory for ' + one + 's')
            return
        }
    }

    if (count == 5) {
        game = 'over'
        alert('Game Over, draw')
    }
}