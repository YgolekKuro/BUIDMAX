/*-- ============== SWITCH MENU ============== --*/
$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger, .header__menu').toggleClass('active')
        $('body').toggleClass('lock')
    })
})

/*-- ============== SCROLL UP ============== --*/
const scrollBtn = document.querySelector(".scroll__up")
// scroll show
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 450) {
        scrollBtn.classList.add("active")
    } else {
        scrollBtn.classList.remove("active")
}
// scroll click
    scrollBtn.onclick = () => {
        window.scrollTo(0, 0)
    }
})
