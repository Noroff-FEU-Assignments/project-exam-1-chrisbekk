import navBar from "../src/navBar.js";
import fetchAPI from "../utils/dataFetching.js";
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


async function main(){
    navBar()
    const posts = await fetchAPI.posts()
    renderFeaturedArticles(posts)
}

main()


const test = document.querySelector(".grid-title-tldr-item")
const lol = document.querySelector(".grid-featured-image")
lol.addEventListener("mouseenter", (e)=>{
    test.style.translate = "0 -100%"
    e.target.addEventListener("mouseleave", (e)=>{
        test.style.translate = "0 0"
    })
})

// const leftBtn = document.querySelector("#left-arrow")
// const rightBtn = document.querySelector("#right-arrow")
// let currentArticle = 0
// leftBtn.addEventListener("click", (e)=>{
//     if(currentArticle === 0){
//         return
//     }
//     currentArticle -= 1
//     console.log(currentArticle)
// })

// rightBtn.addEventListener("click", (e)=>{
//     if(currentArticle === 3){
//         return
//     }
//     currentArticle += 1
//     console.log(currentArticle)
// })

// const arrays = ["omg", "te", "212"]

// function tass(){
//     let currentArticle = 0
//     console.log(arrays[currentArticle])
//     leftBtn.addEventListener("click", (e)=>{
//         if(currentArticle === 0){
//             return
//         }
//         currentArticle -= 1
//         console.log(arrays[currentArticle])
//     })
    
//     rightBtn.addEventListener("click", (e)=>{
//         if(currentArticle === arrays.length-1){
//             return
//         }
//         currentArticle += 1
//         console.log(arrays[currentArticle])
//     })
// }

// tass()

/* GET GRID HTML ELEMENTS */ 
const featuredImageContainer = document.querySelector(".grid-featured-image")
const featuredComments = document.querySelector(".featured-articles-comments")
const featuredDetailsContainer = document.querySelector(".grid-featured-title-container")
const featuredExcerptContainer = document.querySelector(".grid-tldr-item")

function renderFeaturedArticles(posts){
    const leftBtn = document.querySelector("#left-arrow")
    const rightBtn = document.querySelector("#right-arrow")
    let currentArticle = 0
    const currentImage = []
    const currentComment = []
    const currentDetails = []
    const currentExcerpt = []
    console.log(posts)
    posts.forEach(post =>{
        const featuredImage = document.createElement("img")
        featuredImage.src = post.image
        currentImage.push(featuredImage)
        /*grid-featured-title-item*/
        const featuredDetailsItem = document.createElement("div")

        const featuredTitle = document.createElement("p")
        featuredTitle.classList.add("component-content-title")
        featuredTitle.textContent = post.title

        const featuredSubtitle = document.createElement("p")
        featuredSubtitle.classList.add("component-content-subtitle")
        featuredSubtitle.textContent = post.subtitle

        const featuredDate = document.createElement("p")
        featuredDate.classList.add("component-content-body-light")
        
        featuredDate.textContent = post.date

        featuredDetailsItem.append(featuredTitle, featuredSubtitle, featuredDate)
        currentDetails.push(featuredDetailsItem)

        const featuredExcerptTitle = document.createElement("p")
        featuredExcerptTitle.classList.add("component-title")
        featuredExcerptTitle.classList.add("center-text")
        featuredExcerptTitle.textContent = "TLDR"
        const featuredExcerpt = document.createElement("p")
        featuredExcerpt.classList.add("component-content-subtitle")
        featuredExcerpt.textContent = post.excerpt
        const excerptContainer = document.createElement("div")
        excerptContainer.classList.add("grid-tldr-item")
        excerptContainer.append(featuredExcerptTitle, featuredExcerpt)
        currentExcerpt.push(excerptContainer)

        
        featuredImageContainer.append(currentImage[currentArticle])
        featuredDetailsContainer.append(currentDetails[currentArticle])
        featuredExcerptContainer.append(currentExcerpt[currentArticle])
    })
    leftBtn.addEventListener("click", (e)=>{
        if(currentArticle === 0){
            return
        }
        currentArticle -= 1
        featuredImageContainer.innerHTML = ""
        featuredDetailsContainer.innerHTML = ""
        featuredExcerptContainer.innerHTML = ""
        featuredImageContainer.append(currentImage[currentArticle])
        featuredDetailsContainer.append(currentDetails[currentArticle])
        featuredExcerptContainer.append(currentExcerpt[currentArticle])
    })
    rightBtn.addEventListener("click", (e)=>{
        if(currentArticle === posts.length-1){
            return
        }
        currentArticle += 1
        featuredImageContainer.innerHTML = ""
        featuredDetailsContainer.innerHTML = ""
        featuredExcerptContainer.innerHTML = ""
        featuredImageContainer.append(currentImage[currentArticle])
        featuredDetailsContainer.append(currentDetails[currentArticle])
        featuredExcerptContainer.append(currentExcerpt[currentArticle])
    })

}