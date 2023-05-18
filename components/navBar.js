function navBar(){
    const title = document.querySelector(".header-title")
    const header = document.querySelector("header")
    const bars = document.querySelector(".fa-bars")
    const menu = document.querySelector(".menu")
    bars.addEventListener("click", (e)=> {
        menu.classList.toggle("visible")
    })
    title.addEventListener("click", (e)=>document.location.href = "index.html")
    
}

export default navBar