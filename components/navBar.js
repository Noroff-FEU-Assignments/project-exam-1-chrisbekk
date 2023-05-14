function navBar(){
    const header = document.querySelector("header")
    const bars = header.querySelector(".fa-bars")
    const menu = header.querySelector(".menu")
    bars.addEventListener("click", (e)=> {
        menu.classList.toggle("visible")
    })
    
}

export default navBar