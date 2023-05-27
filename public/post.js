import queryString from "../utils/queryString.js";
import fetchAPI from "../utils/dataFetching.js"
import navBar from "../components/navBar.js";
import renderCommment from "../components/renderComment.js";
import postComment from "../utils/commentData.js";
const article = document.querySelector("article")

const commentsContainer = document.querySelector(".comments-container")
const commentHeader = document.querySelector(".comment-section").querySelector(".section-header")

const name = document.getElementById("name")
const comment = document.getElementById("comment")
const submitBtn = document.getElementById("submit")
const form = document.getElementById("comment-form")
const emptyComments = document.createElement("h3")
const modal = document.querySelector(".modal")
const postID = queryString()


async function main(){
    navBar()
    const post = await fetchAPI.getPost(postID)
    article.append(blogArticle(post))
    const comments = await fetchAPI.getComments(postID)
    commentHeader.textContent += ` (${comments.length})`
    comments.length === 0 ? commentsContainer.append(emptyComments) : comments.forEach(comment => commentsContainer.append(renderCommment(comment)))

    
    inputHandler()
}

main()

function blogArticle(post){
    console.log(post)
    const content = document.createElement("div")
    content.classList.add("blog-post-container")
    const image = document.createElement("img")
    image.classList.add("article-image")
    image.src = post.image
    image.alt = post.alt
    modal.querySelector("img").src = post.image
    image.addEventListener("click", (e)=>{
        modal.showModal()
        
    })
    modal.addEventListener("click", e => {
        const dialogDimensions = modal.getBoundingClientRect()
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          modal.close()
        }
      })
    
    content.append(image)

    const title = document.createElement("h1")
    title.classList.add("blog-post-title")
    title.textContent = post.title
    content.append(title)

    const date = document.createElement("p")
    date.classList.add("blog-post-date")
    date.textContent = post.date
    content.append(date)

    const subtitle = document.createElement("h2")
    subtitle.classList.add("blog-post-subtitle")
    subtitle.textContent = post.subtitle
    content.append(subtitle)

    const ingress = document.createElement("p")
    ingress.textContent = post.excerpt
    ingress.classList.add("ingress")
    content.append(ingress)
    
    const textContainer = document.createElement("div")
    textContainer.classList.add("text-container")
    
    const paragraphs= post.content.split("</p>")
    console.log(paragraphs)
    for(let i = 0; i < paragraphs.length; i++){
        const string = paragraphs[i]
        const stringTagsRemoved= string.replaceAll(/<\/?[^>]+(>|$)/gi, "")
        const paragraph = document.createElement("p")
        paragraph.textContent = stringTagsRemoved
        textContainer.append(paragraph)
        
    }
    content.append(textContainer)

    

    return content
}

function inputHandler(){
    const input = document.querySelector("input")
    const textarea = document.querySelector("textarea")
    const button = document.querySelector("button")
    console.log(input.minLength)
    input.oninput = (e)=>{console.log(e.target.value)}
    input.addEventListener("input", (e)=>{
        if(e.target.value.replace(/\s/g, '').length < e.target.minLength){
            e.target.parentElement.querySelector("i").style.color = "#D8737F"
            e.target.addEventListener("focusout", (e)=> e.target.value.length === 0 ? e.target.parentElement.querySelector("i").style.color = "#1E1E1E" : null)
        }
        
        else{
            e.target.parentElement.querySelector("i").style.color = "#89DFCA"
            e.target.addEventListener("focusout", (e)=>{e.target.parentElement.querySelector("i").style.color = "#89DFCA"})
            e.target.dataset.valid = true
        }
    })

    textarea.addEventListener("input", (e)=>{
        if(e.target.value.replace(/\s/g, '').length < e.target.maxLength){
            e.target.style.border = "1px solid #D8737F"
            
        }
        if(e.target.value.length === 0){
            e.target.addEventListener("focusout", (e)=> e.target.value.length === 0 ? e.target.style.border = "unset" : null)
        }
        
        else{
            e.target.parentElement.querySelector("i").style.color = "1px solid #89DFCA"
            e.target.addEventListener("focusout", (e)=>{e.target.style.border = "1px solid #89DFCA"})
            e.target.dataset.valid = true
        }
    })

    button.addEventListener("click", async (e)=>{
        if(input.dataset.valid && textarea.dataset.valid){
            
                e.preventDefault()
                const commentData = {
                    post: postID,
                    author_name: name.value,
                    author_email: "mail@email.com",
                    content: comment.value
                }
            
                await fetchAPI.postComment(commentData)
                const comments = await fetchAPI.getComments(postID, "per_page=1")
                setTimeout(async() => {
                    comments.forEach(comment => commentsContainer.append(renderCommment(comment)))
                    commentHeader.textContent += ` (${comments.length})`
                }, 1000);
                
                form.reset()
            
        }
        else{
            e.target.style.border = "1px solid #89DFCA"
            e.target.style.color = "#89DFCA" 
        }
    })

}


