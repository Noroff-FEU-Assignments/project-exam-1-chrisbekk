function navBar(){
    const navBarIcon = document.getElementById("navbar-icon") 
    const navMenu = document.querySelector(".nav-menu")
    const searchIcon = document.getElementById("search-icon")
    const searchBar = document.querySelector(".searchbar")
    const navBarItems = document.querySelectorAll(".nav-menu-item")

    navBarIcon.addEventListener("click", (event)=>{
        navMenu.classList.toggle("dropdown")
        navBarIcon.dataset.open = navBarIcon.dataset.open === "true" ? "false" : "true"
        if(navBarIcon.dataset.open == "true"){
            navBarIcon.classList.add("fa-xmark")
        } else{
            navBarIcon.classList.remove("fa-xmark")
        }
    })
    searchIcon.addEventListener("click", ()=>{
        searchBar.classList.toggle("searchbar-expand")
        searchIcon.dataset.open = searchIcon.dataset.open === "true" ? "false" : "true"
        if(searchIcon.dataset.open == "true"){
            searchIcon.classList.add("fa-xmark")
            searchBar.value = ""
        } else{
            searchIcon.classList.remove("fa-xmark")
        }
    })

    searchBar.addEventListener("change", (event)=>{
        console.log(event.target.value)
        console.log("changing")
        searchBar.value = ""
    })

    navBarItems.forEach(item =>{
        item.addEventListener("click", (event)=>{
            const element = event.target.textContent.toLowerCase()
            document.location.href = `${element}.html`
            
        })
    })

}

export default navBar