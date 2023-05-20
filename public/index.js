import fetchAPI from "../utils/dataFetching.js"

let items = document.querySelectorAll(".slider .item")
let next = document.getElementById("next")
let prev = document.getElementById("previous")
const slider = document.querySelector(".slider")
const itemNodes = document.querySelectorAll(".item")



let active = 2;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`
    items[active].style.zIndex = 1;
    items[active].style.filter = `none`
    items[active].style.opacity = 1;
    for(let i = active + 1; i < items.length; i++){
        stt++
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(15px) rotateY(-1deg)`
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(5px)`
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0
    for(let i = active -1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(15px) rotateY(1deg)`
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(5px)`
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow()

async function main(){
    const posts = await fetchAPI.posts("per_page=5")
    for(let i = 0; i < posts.length; i++){
        const data = posts[i]
        const item = itemNodes[i]
        const title = document.createElement("h2")
        title.classList.add("post-title")
        item.style.backgroundImage = `url(${data.image})`
        item.append(title)
        title.textContent = data.title
        item.addEventListener("click", (e)=>{
            slider.remove()
            mainElement.classList.add("zoom")
            setTimeout(() => {
                document.location.href = `post.html?id=${data.id}`
            }, 1000);
        })
    }
}
main()


next.onclick = function(){
    console.log("click")
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    console.log("click")
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

const button = document.querySelector(".header-title")
const mainElement = document.querySelector(".index")
button.addEventListener("click", (e)=>{
    slider.remove()
    mainElement.classList.add("zoom")
    setTimeout(() => {
        document.location.href = "index.html"
    }, 1000);
    
})

