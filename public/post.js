import navBar from "../components/navBar.js";
import footer from "../components/footer.js";
import queryString from "../utils/queryString.js";
import fetchAPI from "../utils/dataFetching.js";
import validateInput from "../utils/validateInput.js";
import validateForm from "../utils/validateForm.js";
const postID = queryString()
const commentButton = document.querySelector("#comment-btn")
const commentsSection = document.querySelector(".comments-section") 

const commentAuthor = document.querySelector("#comment-name")
const commentContent = document.querySelector("#comment-content")


//CONTACT FORM VALIDATION AND POST
function inputValidation(...args){
    args.forEach(input =>{
        input.addEventListener("input", validateInput)
    })
}
inputValidation(commentAuthor, commentContent)

commentButton.addEventListener("click", async(e)=>{
    function postComment(){
        function Comment(author, content){
            this.post = postID
            this.author_name = author,
            this.author_email = "mail@mail.com",
            this.content = content
        }
    
        const commentData = new Comment(commentAuthor.value, commentContent.value)
        fetchAPI.postComment(commentData)
    
        setTimeout(async() => {
            const comments = await fetchAPI.getComments(postID)
            commentsSection.innerHTML = ""
            comments.forEach(comment =>{ renderComment(comment)})
            console.log(comments)
        }, 1500);
    }   

    validateForm(commentAuthor, commentContent) ? postComment() : alert("Please fill out all text fields")
    commentAuthor.removeAttribute("data-valid")
    commentContent.removeAttribute("data-valid")
    document.querySelector(".form").reset()
})


async function main(){
    navBar()
    footer()
    // FETCH POST 
    const post = await fetchAPI.getPost(postID)
    // renderPost(post)
    // FETCH COMMENTS
    const comments = await fetchAPI.getComments(postID)
    // RENDER COMMENTS 
    comments.forEach(comment =>{ renderComment(comment)})

    
}

main()


async function renderComment(comment){
    if(comment.parent === 0){
        console.log(comment)
        const {id, author_name:name, date} = comment
        const removeHTMLTags = input => new DOMParser().parseFromString(input, "text/html").body.innerText
        const content = removeHTMLTags(comment.content.rendered)
        const commentCard = document.createElement("div")
        commentCard.classList.add("comment-card")
        commentCard.dataset.id = id
            
        const commentDetailsContainer = document.createElement("div")
        commentDetailsContainer.classList.add("comment-details-container")
        const commentAuthor = document.createElement("p")
        commentAuthor.classList.add("comment-author")
        commentAuthor.textContent = name
        const commentIcon = document.createElement("object")
        commentIcon.type = "image/svg+xml"
        commentIcon.data = "../assets/author.svg"
        commentDetailsContainer.append(commentAuthor, commentIcon)
    
        const commentContentContainer = document.createElement("div")
        commentContentContainer.classList.add("comment-content-container")
        const commentDate = document.createElement("p")
        commentDate.classList.add("comment-author")
        commentDate.textContent = date.replace("T", " ")
        const commentContent = document.createElement("div")
        commentContent.classList.add("aaaa")
        commentContent.textContent = content
        const replyButton = document.createElement("button")
        replyButton.textContent = "Reply"
        replyButton.classList.add("form-button")
        replyButton.addEventListener("click", replyToComment)
        commentContentContainer.append(commentDate, commentContent, replyButton)
            
        commentCard.append(commentDetailsContainer, commentContentContainer)
        const commentCardContainer = document.createElement("div")
        commentCardContainer.classList.add("comment-card-container")
        commentCardContainer.append(commentCard)
        commentsSection.append(commentCardContainer)
            
            
        if(comment._links.children){
            comment._links.children.forEach(async (child) =>{
                const response = await fetch(child.href)
                const reply = await response.json()
                reply.forEach(rep =>{
                    const removeHTMLTags = input => new DOMParser().parseFromString(input, "text/html").body.innerText
                    const content = removeHTMLTags(rep.content.rendered)
                    const replyCard = document.createElement("div")
                    replyCard.classList.add("reply-card")
                    const replyAuthor = document.createElement("p")
                    replyAuthor.classList.add("comment-author")
                    replyAuthor.textContent = rep.author_name
                    const replyContent = document.createElement("div")
                    replyContent.classList.add("aaaa")
                    replyContent.textContent = content
                    replyCard.append(replyAuthor, replyContent)
                        
                    commentCardContainer.append(replyCard)
                })
            })
        }   
    }
}
    



async function replyToComment(event){
    // THIS FUNCTION CREATES THE REPLY FORM ELEMENT AND NOT THE ACTUAL REPLY ELEMENT
    event.target.removeEventListener("click", replyToComment)
    const parentComment  = event.target.parentElement.parentElement
    const form = document.createElement("form")
    form.classList.add("form")
    const formTitle = document.createElement("p")
    formTitle.classList.add("form-title")
    formTitle.textContent = "Reply"
    const authorName = document.createElement("input")
    
    authorName.type = "text"
    authorName.classList.add("form-input")
    authorName.id = "reply-name"
    authorName.ariaPlaceholder = "Name"
    authorName.placeholder = "Name"
    authorName.value
    authorName.dataset.minreq = 4
    authorName.dataset.maxreq = 10
    const comment = document.createElement("textarea")
    comment.name = "comment-content"
    comment.classList.add("comment-content-area")
    comment.id = "reply-content"
    comment.dataset.minreq = 4
    comment.dataset.maxreq = 40
    const button = document.createElement("button")
    button.classList.add("form-button")
    button.type = "button"
    button.textContent = "Post"
    inputValidation(authorName, comment)
    // POST REPLY FUNCTIONALITY LIVES HERE


    button.addEventListener("click", postReply)

    const removeButton = document.createElement("button")
    removeButton.classList.add("form-button")
    removeButton.type = "button"
    removeButton.textContent = "Back"
    form.append(formTitle, authorName, comment, button, removeButton)
    removeButton.addEventListener("click", (e)=> e.target.parentElement.remove(form))
    event.target.parentElement.append(form)
}

async function postReply(event){
    const postID = parseInt(queryString())
    const parentCardElement = event.target.parentElement.parentElement
    const parentID = parseInt(parentCardElement.parentElement.dataset.id)
    const form =  parentCardElement.querySelector(".form")
    const author = form.querySelector("#reply-name")
    const content = form.querySelector("#reply-content")
   
    function replyHandler(){
        // POST THE REPLY TO WP 
        function Comment(postID, author, content, parentID){
            this.post = postID
            this.author_name = author,
            this.author_email = "mail@mail.com",
            this.content = content,
            this.parent = parentID
        }
    
        const commentData = new Comment(postID, author.value, content.value, parentID)
        fetchAPI.postComment(commentData)
        
        //FETCH COMMENTS AND RENDER UPDATED COMMENTS SECTION
    
        setTimeout(async() => {
            const comments = await fetchAPI.getComments(postID)
            commentsSection.innerHTML = ""
            comments.forEach(comment =>{ renderComment(comment)})
            console.log(comments)
        }, 1500);
   }
   console.log(content)
   validateForm(author, content) ? replyHandler() : alert("Please fill in all text fields")
   author.removeAttribute("data-valid")
   content.removeAttribute("data-valid")
   form.reset()

}











