let gallery = document.querySelector('.gallery')
let backBtn = document.getElementById('back')
let nextBtn = document.getElementById('next')

gallery.addEventListener('wheel', (evt) => {
    evt.stopPropagation()
    this.scrollLeft += evt.deltaY
})

backBtn.addEventListener('click', () => {
    gallery.scrollLeft -= 900
})

nextBtn.addEventListener('click', () => {
    gallery.scrollLeft += 900
})