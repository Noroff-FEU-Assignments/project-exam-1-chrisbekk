function footer(){
    const footerElement = document.querySelector("footer")
    const footerItems = footerElement.querySelectorAll(".footer-item")
    
    footerItems.forEach(item =>{
        item.dataset.clickable = true
        item.addEventListener("click", (e)=>{
            const redirect = e.target.textContent
            
            if(redirect === "Back to Top"){
                window.location.href = "#top"
                return
            }
            if( redirect === "Home"){
                window.location.href = "index.html"
                return
            }
            window.location.href = `${redirect.toLowerCase()}.html`
            
        })
    })
}

export default footer



