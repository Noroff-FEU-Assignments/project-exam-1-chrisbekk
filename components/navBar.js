function navBar(){
    const header = document.querySelector("header")
    const bars = document.querySelector(".fa-bars")
    const menu = document.querySelector(".menu")
    bars.addEventListener("click", (e)=> {
        menu.classList.toggle("visible")
    })
    
}

export default navBar