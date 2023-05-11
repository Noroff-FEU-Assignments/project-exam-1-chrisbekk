import navBar from "../components/navBar.js";
import footer from "../components/footer.js";
import fetchAPI from "../utils/dataFetching.js";
import renderPost from "../components/renderPost.js";
const container = document.querySelector("svg")
const buttons = container.querySelectorAll("rect")
const newsArticlesContainer = document.querySelector(".articles-container")

function animateButton(e){
    console.log(e.target.dataset.nofill)
    if(e.target.dataset.nofill == "false"){
        e.target.nextElementSibling.style.fill = "#FAB849"
        e.target.nextElementSibling.addEventListener("mouseover", (e)=> e.target.style.fill = "#FAB849")
        e.target.addEventListener("mouseout", (e)=> e.target.nextElementSibling.style.fill = "#A5A5A5")
    }

}

function handleEnterButton(e){
    if(e.target.dataset.clickable){
        document.location.href = "articles.html"
    }
    
}


buttons.forEach(button => button.onmouseenter = e => animateButton(e))
buttons.forEach(button => button.onclick = e => handleEnterButton(e))



async function main(){
    window.onbeforeunload = ()=>window.scrollTo(0, 0);
    navBar()
    footer()
    const comments = await fetchAPI.getComments(27)
    console.log(comments)
    const posts = await fetchAPI.posts("categories=16&per_page=5")
    posts.forEach(post =>{
        newsArticlesContainer.append(renderPost(post))
    })
    const postsFeatured = await fetchAPI.posts("categories=7")
    renderFeaturedArticles(postsFeatured)
    console.log(postsFeatured)
}

main()
console.log("hello")
/* GET GRID HTML ELEMENTS */ 
const featuredImageContainer = document.querySelector(".grid-featured-image")
const featuredCommentsContainer = document.querySelector(".grid-featured-comments")
const featuredDetailsContainer = document.querySelector(".grid-featured-details")
const featuredPostCardContainer = document.querySelector(".article-cards-container")
function renderFeaturedArticles(posts){
    console.log(posts)
    const leftBtn = document.querySelector("#left-arrow")
    const rightBtn = document.querySelector("#right-arrow")
    let currentArticle = 0
    const currentImage = []
    const currentComment = []
    const currentDetails = []
    console.log(posts)
    posts.forEach(async (post) =>{
        const postCard = document.createElement("div")
        postCard.classList.add("article-card")
        postCard.dataset.clickable = "true"
        postCard.addEventListener("click", (e)=> document.location.href = `post.html?id=${post.id}`)
        const cardDetails = document.createElement("div")
        cardDetails.classList.add("card-details-container")
        const cardImage = document.createElement("img")
        cardImage.src = post.image
        postCard.append(cardImage)

        
        const cardTitle = document.createElement("p")
        cardTitle.textContent = post.title
        cardTitle.classList.add("card-title")
        cardDetails.append(cardTitle)
        
        

        const cardSubTitle = document.createElement("p")
        cardSubTitle.textContent = post.subtitle
        cardSubTitle.classList.add("card-subtitle")
        cardDetails.append(cardSubTitle)
        

        const cardDate = document.createElement("p")
        cardDate.textContent = post.date
        cardDate.classList.add("card-body-light")
        cardDetails.append(cardDate)
        postCard.append(cardDetails)
        featuredPostCardContainer.append(postCard)
        const tagContainer = document.createElement("div")
        tagContainer.classList.add("tag-container")
        post.tags.forEach(tag =>{
            const tagElement = document.createElement("span")
            tagElement.classList.add("tag")
            tagElement.classList.add("component-body-light")
            tagElement.textContent = tag
            tagContainer.append(tagElement)
        })

        const comments = await fetchAPI.getComments(post.id)
        console.log(comments)
        console.log(comments.length)
        const commentIcon = document.createElement("object")
        commentIcon.setAttribute("data", "/assets/comment.svg")
        commentIcon.style.width = "50px"
        commentIcon.style.height = "50px"
        const featuredComment = document.createElement("p")
        featuredComment.classList.add("component-body-light")
        featuredComment.textContent = `( ${comments.length} ) Comments`
        
        const commentContainer = document.createElement("div")
        const subContainer = document.createElement("div")
        subContainer.classList.add("comment-subcontainer")
        subContainer.append(commentIcon, featuredComment)
        commentContainer.classList.add("grid-comment-container")
        commentContainer.append(tagContainer, subContainer)
        currentComment.push(commentContainer)
        

        const featuredImage = document.createElement("img")
        featuredImage.src = post.image
        featuredImage.dataset.clickable = "true"
        currentImage.push(featuredImage)
        featuredImage.addEventListener("click", (e)=>{
            document.location.href = `post.html?id=${post.id}`
        })


        const featuredDetailsItem = document.createElement("div")
        featuredDetailsItem.classList.add("grid-details-container")
        
        const featuredTitle = document.createElement("p")
        featuredTitle.classList.add("component-title")
        featuredTitle.textContent = post.title
        featuredTitle.dataset.clickable = "true"
        featuredTitle.addEventListener("click", (e)=>{
            document.location.href = `post.html?id=${post.id}`
        })
        const featuredSubtitle = document.createElement("p")
        featuredSubtitle.classList.add("component-subtitle")
        featuredSubtitle.textContent = post.subtitle

        const featuredDate = document.createElement("p")
        featuredDate.classList.add("component-body-light")
        
        featuredDate.textContent = post.date

        featuredDetailsItem.append(featuredTitle, featuredSubtitle, featuredDate)
        currentDetails.push(featuredDetailsItem)

        featuredImageContainer.append(currentImage[currentArticle])
        featuredCommentsContainer.append(currentComment[currentArticle])
        featuredDetailsContainer.append(currentDetails[currentArticle])
        
    })
    leftBtn.addEventListener("click", (e)=>{
        if(currentArticle === 0){
            
            return
        }
        
        currentArticle -= 1
        featuredImageContainer.innerHTML = ""
        featuredDetailsContainer.innerHTML = ""
        featuredCommentsContainer.innerHTML = ""
        featuredImageContainer.append(currentImage[currentArticle])
        featuredCommentsContainer.append(currentComment[currentArticle])
        featuredDetailsContainer.append(currentDetails[currentArticle])
    
    })
    rightBtn.addEventListener("click", (e)=>{
        if(currentArticle === posts.length-1){
    
            return
        }
        
        currentArticle += 1
        featuredImageContainer.innerHTML = ""
        featuredDetailsContainer.innerHTML = ""
        featuredCommentsContainer.innerHTML = ""
        featuredImageContainer.append(currentImage[currentArticle])
        featuredCommentsContainer.append(currentComment[currentArticle])
        featuredDetailsContainer.append(currentDetails[currentArticle])
        
    })

}

