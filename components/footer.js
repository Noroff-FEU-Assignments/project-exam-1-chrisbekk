function footer(){
    const footerElement = document.querySelector(".footer")
    const main = document.querySelector(".widescreen")
    const footerButton= document.querySelector(".footer-icon")
    footerButton.addEventListener("click", function(){
        console.log("CLICKED")
        footerElement.classList.toggle("show")
        document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true"
    })
} 

export default footer