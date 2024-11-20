let menuButton = document.querySelector('.menuToggle i')
let navbar = document.querySelector('.navbar')
let nav = document.querySelector('nav')
let header = document.querySelector('header')
let skillsSectionFirstSkill = document.querySelector('.skills .leftSide .skill:first-child .progressLine')
let skillsSectionLastSkill = document.querySelector('.skills .rightSide .skill:last-child .progressLine')
let skillsSection = document.querySelector('.skills')
let scrollTopButton = document.querySelector('.scrollTopButton')

let skillsSectionAnimationStartLineTop = skillsSectionFirstSkill.getBoundingClientRect().top + skillsSectionFirstSkill.clientHeight + window.scrollY
let skillsSectionAnimationStartLineBottom = skillsSectionLastSkill.getBoundingClientRect().bottom + skillsSectionLastSkill.clientHeight + window.scrollY + screen.height - 200

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
})

window.addEventListener('load', () => {
    if (document.documentElement.scrollTop + window.innerHeight > skillsSectionAnimationStartLineTop && document.documentElement.scrollTop + window.innerHeight < skillsSectionAnimationStartLineBottom) {
        showProgress()
    }
})

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > header.offsetHeight - nav.offsetHeight) {
        nav.style.boxShadow = '0px 7px 11px 1px rgba(0,0,0,0.4)'
        scrollTopButton.style.display = 'flex'
    } else {
        nav.style.boxShadow = ''
        scrollTopButton.style.display = ''
    }
    if (document.documentElement.scrollTop + window.innerHeight > skillsSectionAnimationStartLineTop && document.documentElement.scrollTop + window.innerHeight < skillsSectionAnimationStartLineBottom) {
        showProgress()
    }
})

function showProgress() {
    let progressRows = document.querySelectorAll('.skills .progress')

    progressRows.forEach(el => {
        el.style.width = el.parentElement.nextSibling.nextSibling.innerHTML
    })
}


let profiles = document.querySelectorAll('.profiles .content .row .profile')

profiles.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.querySelector('a').style.display = 'none'
        el.querySelector('p').style.display = 'none'
        el.querySelector('.hoverProfile').style.zIndex = '1'
        el.querySelector('.hoverProfile').style.width = '100%'
        el.querySelector('.hoverProfile').style.height = '100%'
        el.querySelector('.hoverProfile').style.top = '0%'
        el.querySelector('.hoverProfile').style.left = '0%'
    })

    el.addEventListener('mouseleave', () => {
        el.querySelector('a').style.display = 'inline-block'
        el.querySelector('p').style.display = 'inline-block'
        el.querySelector('.hoverProfile').style.zIndex = '-1'
        el.querySelector('.hoverProfile').style.width = '0%'
        el.querySelector('.hoverProfile').style.height = '0%'
        el.querySelector('.hoverProfile').style.top = '50%'
        el.querySelector('.hoverProfile').style.left = '50%'
    })
})


let portfolioImages = document.querySelectorAll('.portfolio .content .imageBox')

portfolioImages.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.querySelector('.hoverInfo').style.zIndex = '1'
        el.querySelector('.hoverInfo').style.width = '100%'
        el.querySelector('.hoverInfo').style.height = '100%'
        el.querySelector('.hoverInfo').style.top = '0%'
        el.querySelector('.hoverInfo').style.left = '0%'

        el.querySelector('img').style.transform = 'scale(1.3)'
    })

    el.addEventListener('mouseleave', () => {
        el.querySelector('.hoverInfo').style.zIndex = '-1'
        el.querySelector('.hoverInfo').style.width = '0%'
        el.querySelector('.hoverInfo').style.height = '0%'
        el.querySelector('.hoverInfo').style.top = '50%'
        el.querySelector('.hoverInfo').style.left = '50%'

        el.querySelector('img').style.transform = 'scale(1.0)'
    })
})




scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})