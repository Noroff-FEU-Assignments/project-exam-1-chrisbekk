function navBar(){
    const header = document.querySelector("header")
    const navMenu = document.querySelector("nav")
    const title = document.querySelector(".logo-title")
    const navIcon = document.querySelector(".navigation-icon")
    navIcon.addEventListener("click", (e)=>{
        navIcon.classList.toggle("fa-xmark")
        navIcon.classList.toggle("fa-bars")
        navMenu.classList.toggle("show")
        header.classList.toggle("darken")

    })
    title.addEventListener("click", (e)=> document.location.href ="index.html")



}

export default navBar
