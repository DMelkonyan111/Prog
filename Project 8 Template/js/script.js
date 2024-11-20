let header = document.querySelector('header')
let menuSection = document.querySelector('.menuSection')
let aboutSection = document.querySelector('.aboutSection')
let contactSection = document.querySelector('.contactSection')
let navbar = document.querySelector('nav')

window.addEventListener('load', () => {
    navbarColor()
})

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.7)'
    } else {
        navbar.style.background = ''
    }

    navbarColor()
})

let navButton = document.querySelector('.menuToggle')
let navBarUl = document.querySelector('nav ul')

navButton.addEventListener('click', () => {
    navBarUl.classList.toggle('active')

    if (navbar.style.height == '265px') {
        navbar.style.height = '70px'
        navbar.style.width = '65px'
    } else {
        navbar.style.height = '265px'
        navbar.style.width = '130px'
    }
})

let introButton = navbar.querySelector('.intro')
let menuButton = navbar.querySelector('.menu')
let aboutButton = navbar.querySelector('.about')
let contactButton = navbar.querySelector('.contact')


introButton.addEventListener('click', () => {
    scrollToSection(0)
})

menuButton.addEventListener('click', () => {
    let topBorder = header.clientHeight - navbar.clientHeight
    scrollToSection(topBorder)
})

aboutButton.addEventListener('click', () => {
    let topBorder = header.clientHeight + menuSection.clientHeight - navbar.clientHeight
    scrollToSection(topBorder)
})

contactButton.addEventListener('click', () => {
    let topBorder = header.clientHeight + menuSection.clientHeight + aboutSection.clientHeight - navbar.clientHeight
    scrollToSection(topBorder)
})

function scrollToSection(top) {
    window.scrollTo({ top: top, left: 0, behavior: "smooth" });
}


function navbarColor() {
    let sections = navbar.querySelectorAll('a')

    sections.forEach(el => {
        el.style.setProperty('--someheight', '0px')
    })

    if (document.documentElement.scrollTop > header.clientHeight + menuSection.clientHeight + aboutSection.clientHeight - navbar.clientHeight && document.documentElement.scrollTop < header.clientHeight + menuSection.clientHeight + aboutSection.clientHeight + contactSection.clientHeight - navbar.clientHeight) {
        let a = navbar.querySelector('.contact')
        a.style.setProperty('--someheight', '3px')
    } else if (document.documentElement.scrollTop > header.clientHeight + menuSection.clientHeight - navbar.clientHeight && document.documentElement.scrollTop < header.clientHeight + menuSection.clientHeight + aboutSection.clientHeight - navbar.clientHeight) {
        let a = navbar.querySelector('.about')
        a.style.setProperty('--someheight', '3px')
    } else if (document.documentElement.scrollTop > header.clientHeight - navbar.clientHeight && document.documentElement.scrollTop < header.clientHeight + menuSection.clientHeight - navbar.clientHeight) {
        let a = navbar.querySelector('.menu')
        a.style.setProperty('--someheight', '3px')
    } else if (document.documentElement.scrollTop < header.clientHeight - navbar.clientHeight) {
        let a = navbar.querySelector('.intro')
        a.style.setProperty('--someheight', '3px')
    }
}

let takeToMenuButton = document.querySelector('#takeToMenu')

takeToMenuButton.addEventListener('click', () => {
    let menuStart = header.clientHeight
    window.scrollTo({ top: menuStart, left: 0, behavior: "smooth" });
})

let takeToContactButton = document.querySelector('#contact')

takeToContactButton.addEventListener('click', () => {
    let contactStart = header.clientHeight + menuSection.clientHeight + aboutSection.clientHeight
    window.scrollTo({ top: contactStart, left: 0, behavior: "smooth" });
})

let inputs = document.querySelectorAll('.focus')

inputs.forEach(el => {
    el.addEventListener('focus', () => {
        el.style.border = '1px solid #CC9966'
        el.style.boxShadow = '0 0 10px #b67533'
    })

    el.addEventListener('blur', () => {
        el.style.border = ''
        el.style.boxShadow = ''
        el.style.borderBottom = '1px solid #CC9966'
    })
})