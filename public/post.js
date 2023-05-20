import renderPost from "../components/renderPost.js";
import renderCommment from "../components/renderComment.js";
import fetchAPI from "../utils/dataFetching.js";
import queryString from "../utils/queryString.js";

const postSection = document.querySelector(".post-item")
const commentsContainer = document.querySelector(".comments-container")
const name = document.getElementById("name")
const comment = document.getElementById("comment")
const submitBtn = document.getElementById("submit")
const form = document.getElementById("comment-form")
const postID = queryString()
const emptyComments = document.createElement("h3")
emptyComments.classList.add("section-subheader")
emptyComments.textContent = "Be the first to comment"



async function main(){
    
    const post = await fetchAPI.getPost(postID)

    const comments = await fetchAPI.getComments(postID)
    console.log(comments)
    comments.length === 0 ? commentsContainer.append(emptyComments) : comments.forEach(comment => commentsContainer.append(renderCommment(comment)))
    
    const item = document.createElement("div")
    item.classList.add("post")
    const image = document.createElement("img")
    image.src = post.fimg_url
    
    const title = document.createElement("h1")
    title.classList.add("post-title")
    title.textContent = post.title.rendered

    item.append(image, title)
    const content = post.content.rendered.split("</p>")
    for(let i = 0; i < content.length; i++){
        const paragraph = document.createElement("p")
        paragraph.textContent = content[i]
        item.append(paragraph)
        console.log(paragraph)
    }


    postSection.append(item)
    inputHandler()

}

main()



function inputHandler(){
    const input = document.querySelector("input")
    const textarea = document.querySelector("textarea")
    const button = document.querySelector("button")
    console.log(input.minLength)
    input.oninput = (e)=>{console.log(e.target.value)}
    input.addEventListener("input", (e)=>{
        if(e.target.value.length < e.target.minLength){
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
        if(e.target.value.length < e.target.maxLength){
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
                setTimeout(async() => {
                    const res = await fetchAPI.getComments(postID)
                    
                }, 500);
                form.reset()
            
        }
        else{
            e.target.style.border = "1px solid #89DFCA"
            e.target.style.color = "#89DFCA" 
        }
    })

}






