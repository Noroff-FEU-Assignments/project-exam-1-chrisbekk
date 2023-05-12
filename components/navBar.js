function navBar(){
    const headerElement = document.querySelector("header")
    const navElements = headerElement.querySelectorAll("a")
    const navBarElement = headerElement.querySelector(".icons")
    const navMenuElement = headerElement.querySelector(".navigation")
    const navMenuSmall = headerElement.querySelector(".navigation-small")
    const heroElement = document.querySelector(".hero")
    const navHeroElement = document.querySelector(".navigation-hero")
    console.log(navElements)
    const currentPage = window.location.href

    for(let i = 0; i < navElements.length; i++){
        const navElement = navElements[i]
        navElement.href === currentPage ? navElement.dataset.active = true : null
    }

    navBarElement.addEventListener("click", (e)=>{
        console.log(navMenuSmall)
        e.target.classList.toggle("fa-bars")
        navMenuSmall.classList.toggle("navigation-active")
        e.target.classList.toggle("fa-xmark")    
    })
    
    window.addEventListener("resize", (e)=> {
        const width = window.innerWidth
        width > 1024
    })
    
    window.addEventListener("scroll", (e)=>{
        let pos = heroElement.getBoundingClientRect()
        if(pos.top < 165){
            navHeroElement.style.visibility = "visible"
            heroElement.style.visibility = "hidden"
        } else{
            navHeroElement.style.visibility = "hidden"
            heroElement.style.visibility = "visible"
        } 
    })

}

export default navBar