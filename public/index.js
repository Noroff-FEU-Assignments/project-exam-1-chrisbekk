import navBar from "../src/navBar.js";

const element = document.querySelector(".circle")
const container = document.querySelector("svg")
const buttons = container.querySelectorAll("rect")
function heroAnimation(e){
    element.style.display = "block"
    let x = e.clientX
    let y = e.clientY
    
    element.style.setProperty("--mouse-x", `${x}px`);
    element.style.setProperty("--mouse-y", `${y}px`);

    container.addEventListener("mouseleave", e=>{
        element.style.display = "none"
    })

}
function animateButton(e){
    console.log(e.target.dataset.nofill)
    if(e.target.dataset.nofill == "false"){
        e.target.nextElementSibling.style.fill = "#FAB849"
        e.target.nextElementSibling.addEventListener("mouseover", (e)=> e.target.style.fill = "#FAB849")
        e.target.addEventListener("mouseout", (e)=> e.target.nextElementSibling.style.fill = "#A5A5A5")
    }

}

function handleEnterButton(e){
    document.location.href = "articles.html"
}


buttons.forEach(button => button.onmouseenter = e => animateButton(e))
buttons.forEach(button => button.onclick = e => handleEnterButton(e))
container.onmousemove = e => heroAnimation(e)




function main(){
    navBar()
}

main()