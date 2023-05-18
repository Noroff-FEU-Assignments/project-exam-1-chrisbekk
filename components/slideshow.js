import fetchAPI from "../utils/dataFetching.js"

let items = document.querySelectorAll(".slider .item")
let next = document.getElementById("next")
let prev = document.getElementById("previous")
const postItems = document.querySelectorAll(".item")
console.log(postItems)

async function test(){
    const posts = await fetchAPI.posts("per_page=5")
    
    for(let i = 0; i < posts.length; i++){
        const post = posts[i]
        const item = postItems[i]
        item.querySelector(".post-title").textContent = post.title
        item.querySelector("p").textContent = post.subtitle
        item.style.backgroundImage = `url(${post.image})`
        
    }
}
test()

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