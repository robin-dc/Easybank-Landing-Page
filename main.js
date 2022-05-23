const toggle = document.getElementsByClassName('navigator')[0]
const navi = document.getElementsByClassName('navs')[0]

// ========================= to show the menu when hamburger was click  ========================= 
toggle.addEventListener('click', ()=>{
    navi.classList.toggle('active')
})

// ========================= for hamburger animation  ========================= 
toggle.addEventListener('click', function (){
    this.classList.toggle('is-active')
})

// ========================= hamburger disappear when scroll  ========================= 
window.addEventListener("scroll",() =>{
    navi.classList.toggle('active', false)
    toggle.classList.toggle('is-active',false)
});