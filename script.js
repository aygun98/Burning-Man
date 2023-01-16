const barsbtn = document.querySelector('.fa-bars')
const xmark = document.querySelector('.fa-xmark')
const overlay = document.querySelector('.overlay')

barsbtn.addEventListener('click', function () {

    overlay.classList.add('aktiv')
})

xmark.addEventListener('click', function () {
    overlay.classList.remove('aktiv')
})