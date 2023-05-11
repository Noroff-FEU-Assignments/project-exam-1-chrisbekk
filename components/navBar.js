function navBar(){
    window.onbeforeunload = ()=>window.scrollTo(0, 0);
    const navBarIcon = document.getElementById("navbar-icon") 
    const navMenu = document.querySelector(".nav-menu")
    const searchIcon = document.getElementById("search-icon")
    const searchBar = document.querySelector(".searchbar")
    const navBarItems = document.querySelectorAll(".nav-menu-item")
    const headerElement = document.querySelector("header")
    const logo = document.querySelector(".header-logo")
    
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

    logo.addEventListener("click", (event)=>{
        document.location.href = "index.html"
    })

    navBarItems.forEach(item =>{
        item.addEventListener("click", (event)=>{
            const element = event.target.textContent.toLowerCase()
            document.location.href = `${element}.html`
            
        })
    })

    
    // document.addEventListener("scroll", ()=>{
    //     const rect = headerElement.getBoundingClientRect()
    //     if(rect.top.toFixed() !== "9"){
    //         headerElement.classList.add("header-border")
    //     }else{
    //         headerElement.classList.remove("header-border")
    //     }
    // })

    // const height = Math.round(document.body.getBoundingClientRect().height)
    // const alpha = height / 100
    // const currentScrollY = window.scrollY
    
    // console.log(alpha)
    // // 24 23 23
    // // 250, 184, 73
    // // 231, 161, 50
    
    // headerElement.style.setProperty("--alpha", `rgba(24, 23, 23)`)
    // logo.style.setProperty("--darkfont", `rgba(165, 165, 165)`)
    // navBarItems.forEach(item =>item.style.setProperty("--darkfont", `rgba(165, 165, 165)`))
    //     const addNavColor = (increment, element)=>{
    //         if(element == navBarItems){
    //             navBarItems.forEach((item) =>{
    //                 const red = `${165-(increment * 5)}`
    //                 const green = `${165-(increment * 4)}`
    //                 const blue = `${165-(increment * 1.5)}`
    //                 item.style.setProperty("--darkfont", `rgba(${red},${green},${blue})`) 
    //             })

    //         }


    //     if(element == logo){
    //         const red = `${165-(increment * 5)}`
    //         const green = `${165-(increment * 4)}`
    //         const blue = `${165-(increment * 1.5)}`
    //         logo.style.setProperty("--darkfont", `rgba(${red},${green},${blue})`) 
    //     }
    //     console.log(getComputedStyle(headerElement).backgroundColor)    
    //     const red = `${24+(increment * 4.5)}`
    //     const green = `${23 + (increment * 3.2)}`
    //     const blue = `${23 + (increment * 1)}`
    //     headerElement.style.setProperty("--alpha", `rgba(${red},${green},${blue})`)
    // }


    // console.log(getComputedStyle(headerElement).backgroundColor)
    // window.addEventListener("scroll", ()=>{
    //     console.log(typeof(logo))
    //     let newScrollY = window.scrollY / 10
    //     if( newScrollY < 55){
    //         newScrollY > currentScrollY ? addNavColor(newScrollY, headerElement) : addNavColor(-newScrollY, headerElement)
    //         newScrollY > currentScrollY ? addNavColor(newScrollY, logo) : addNavColor(-newScrollY, logo)
    //         newScrollY > currentScrollY ? addNavColor(newScrollY, navBarItems) : addNavColor(-newScrollY, navBarItems)
    //         console.log(newScrollY)
    //     }
        
    // },{ passive: true })

}

export default navBar