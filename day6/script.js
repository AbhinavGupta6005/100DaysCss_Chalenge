const menu = document.querySelector('.menu-icon')
let list = document.querySelector('.list')
const search = document.querySelector('.search-icon')

let menuActive = document.querySelector('.note')
let searchActive = document.querySelector('.search')

menu.addEventListener('click',()=>{
    menuActive.classList.toggle('activeHamburger')
    list.classList.toggle('activeMenu')
})

search.addEventListener("click",()=>{
    searchActive.classList.toggle('input')
})