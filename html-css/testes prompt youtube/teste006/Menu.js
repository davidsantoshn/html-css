window.addEventListener ("scroll", function(){
    let hearder = document.querySelector('#header')
    hearder.classList.toggle('rolagem',window.scrollY > 400)
})