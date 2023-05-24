import renderBlogPost from '../components/blogPost.js'
import fetchAPI from '../utils/dataFetching.js'
import navBar from '../components/navBar.js'

const items = document.querySelectorAll(".slider .item")
const next = document.getElementById("next")
const prev = document.getElementById("prev")
const itemNodes = document.querySelectorAll(".item")
const blogContainer = document.querySelector(".blog-container")
const heroBtn = document.getElementById("hero-btn")

let active = 2

async function main(){
    navBar()
    loadShow()
    carouselPosts()
    
    const posts = await fetchAPI.posts("categories=7")
    
    posts.forEach(post => blogContainer.append(renderBlogPost(post)))

    next.addEventListener("click", (e)=>{
        active = active + 1 < items.length ? active + 1 : active
        loadShow()
    })

    prev.addEventListener("click", (e)=>{
        active = active - 1 >= 0 ? active - 1 : active
        loadShow()
    })

    heroBtn.addEventListener("click", (e)=> document.location.href = "posts.html")

}

main()

function loadShow(){
    let stt = 0
    items[active].style.transform = `none`
    items[active].style.zIndex = 1
    items[active].style.filter = "none"
    items[active].style.opacity = 1
    for(let i = active + 1; i < items.length; i++){
        stt++
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`
        items[i].style.zIndex = -stt
        items[i].style.filter = "blur(5px)"
        items[i].style.opacity = stt > 2 ? 0 : 0.6

    }
    stt = 0
    for(let i = active - 1; i >= 0; i--){
        stt++
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`
        items[i].style.zIndex = -stt
        items[i].style.filter = "blur(5px)"
        items[i].style.opacity = stt > 2 ? 0 : 0.6
    }
}

async function carouselPosts(){
    const posts = await fetchAPI.posts("per_page=5")
    for(let i = 0; i < posts.length; i++){
        const data = posts[i]
        const item = itemNodes[i]
        const title = document.createElement("h2")
        title.classList.add("post-title")
        item.style.backgroundImage = `url(${data.image})`
        const subtitle = document.createElement("p")
        subtitle.classList.add("post-subtitle")
        subtitle.textContent = data.subtitle
        item.append(title, subtitle)
        title.textContent = data.title
        item.addEventListener("click", (e)=>{
            document.location.href = `post.html?id=${data.id}`
           
        })
    }
}