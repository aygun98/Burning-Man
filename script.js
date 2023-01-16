const barsbtn = document.querySelector('.fa-bars')
const xmarkBagla = document.querySelector('.fa-xmark')
const overlay = document.querySelector('.overlay')

barsbtn.addEventListener('click', function () {

    overlay.classList.add('aktiv')
})

xmarkBagla.addEventListener('click', function () {
    overlay.classList.remove('aktiv')
})