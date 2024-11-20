function add() {
    let text = document.querySelector('#text').value;

    if (!text) {
        alert('Write the task before insertion')
        return
    }

    let container = document.querySelector('.container')
    
    let row = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p')
    let eraseDiv = document.createElement('div')
    let erase = document.createElement('img')

    row.className = 'taskRow'
    img.setAttribute('src', 'img/unchecked.png')
    img.className = 'unchecked'
    p.innerHTML = text
    eraseDiv.className = 'delete'
    erase.src = 'img/reject.png'
    erase.className = 'erase'
    eraseDiv.append(erase)

    img.addEventListener('click', checkToggle)
    erase.addEventListener('mouseover', bgFocus)
    erase.addEventListener('mouseout', bgLeave)
    erase.addEventListener('click', deleteTask)


    row.append(img)
    row.append(p)
    row.append(eraseDiv)

    container.append(row)
}

function checkToggle() {
    if (this.className == 'unchecked') {
        this.src = 'img/checked.png'
        this.className = 'checked'
        this.parentElement.style.textDecoration = 'line-through'
    } else {
        this.src = 'img/unchecked.png'
        this.className = 'unchecked'
        this.parentElement.style.textDecoration = ''
    }
}

function bgFocus() {
    this.parentElement.style.background = '#EEEEEE'
}

function bgLeave() {
    this.parentElement.style.background = ''
}

function deleteTask() {
    this.parentElement.parentElement.remove()
}