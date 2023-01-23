

const barsbtn = document.querySelector('.fa-bars')
const xmarkBagla = document.querySelector('.fa-xmark')
const overlay = document.querySelector('.overlay')

barsbtn.addEventListener('click', overlayYarat )
function overlayYarat () {

    overlay.classList.add('aktiv')
}

xmarkBagla.addEventListener('click', overlaySil )
function overlaySil () {
    overlay.classList.remove('aktiv')
}


// TYPING EFFECT
const h1ElementiTypeEffect = document.getElementById('center-h1-type-effect')

const text = 'BURNING MAN'
console.log(text.length)

 let i = 0
 const speed = 150

 function typeEffect() {
    if (i < text.length) {
        h1ElementiTypeEffect.innerText += text.charAt(i)
        i++
        setTimeout(typeEffect,speed)
    }
 }

 window.addEventListener('DOMContentLoaded', typeEffect)



 // AOS kitabxanasi
AOS.init();


//scrollTop 

// const ScrollNav = document.querySelector('.navbar ')

window.addEventListener('scroll' , navaScrollVer)

function navaScrollVer() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector('.navbar').classList.add('sticky')
    }
    else{
        document.querySelector('.navbar').classList.remove('sticky')
    }

}