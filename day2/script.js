const menu = document.querySelector('.menu')
let lineTop = document.querySelector('.linetop')
let lineCenter = document.querySelector('.linecenter')
let linelower = document.querySelector('.linelower')

const navbar = document.querySelector('.navbar')


menu.addEventListener('click', ()=>{
    lineTop.classList.toggle('top')
    lineCenter.classList.toggle('center')
    linelower.classList.toggle('lower')

    navbar.style.display = (navbar.style.display=='none' || navbar.style.display=='' ? 'flex' : 'none')
})

