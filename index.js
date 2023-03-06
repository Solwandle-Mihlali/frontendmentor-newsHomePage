let mobileToggleMenu = document.getElementById('mobile-show-menu')
let mobileNav = document.getElementById("mobile-side-nav")
let closeMobileNav = document.getElementById('closeMobileNav')


mobileNav.style.display = "none"


mobileToggleMenu.addEventListener("click",()=>{
 
    mobileNav.classList.add('revealSideNav')
    mobileNav.style.display = "flex"

})

closeMobileNav.addEventListener("click",()=>{
    mobileNav.style.top = "-1000%"

    setTimeout(() => {
        mobileNav.classList.remove('revealSideNav') 
        mobileNav.style.display = ""
    },1500);


})