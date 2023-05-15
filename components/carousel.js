const postContainer = document.querySelector(".hero")
const wrapper = document.querySelector(".wrapper")
const body = document.querySelector("body")




function carousel(posts){
    console.log(posts)
    let currentIndex = 0
    const postsArray = []
    body.dataset.theme = currentIndex
    for(let i = 0; i < posts.length; i++){
        const currentPost = posts[i]
        function redirect(){
            return document.location.href = `travels.html?id=${currentPost.id}`
        }
        const post = document.createElement("div")
        post.classList.add("post")
        const image = document.createElement("img")
        image.src = currentPost.image

        const postDetailsContainer = document.createElement("div")
        postDetailsContainer.classList.add("post-details-container")
        const postTitle = document.createElement("h2")
        postTitle.classList.add("post-title")
        postTitle.textContent = currentPost.title
        postTitle.style.setProperty("--background-title", `url(${currentPost.image})`)

        const dateContainer = document.createElement("div")
        dateContainer.classList.add("date-container")
        const postDateMonth = document.createElement("p")
        postDateMonth.classList.add("post-date")
        postDateMonth.textContent = "May"
        const postDateDay = document.createElement("p")
        postDateDay.classList.add("post-date")
        postDateDay.textContent = "24"
        dateContainer.append(postDateMonth, postDateDay)
        const navigationContainer = document.createElement("div")
        navigationContainer.classList.add("navigation-container")
        const arrowIconUp = document.createElement("i")
        arrowIconUp.classList.add("fa-solid")
        arrowIconUp.classList.add("fa-arrow-up")
        arrowIconUp.classList.add("fa-xl")
        arrowIconUp.classList.add("nav-arrow-icon")
        arrowIconUp.dataset.hasvalue = -1
        const arrowIconDown = document.createElement("i")
        arrowIconDown.classList.add("fa-solid")
        arrowIconDown.classList.add("fa-arrow-down")
        arrowIconDown.classList.add("fa-xl")
        arrowIconDown.classList.add("nav-arrow-icon")
        arrowIconDown.dataset.hasvalue = 1
        navigationContainer.append(arrowIconUp, arrowIconDown)
        const readMore = document.createElement("p")
        readMore.classList.add("readmore")
        readMore.textContent = "Read More"
        readMore.addEventListener("click", redirect)
        postDetailsContainer.append(postTitle, dateContainer, navigationContainer, readMore)
        const PostSubtitle = document.createElement("h3")
        PostSubtitle.classList.add("post-subtitle")
        PostSubtitle.textContent = currentPost.subtitle
        post.append(image, postDetailsContainer, PostSubtitle)
        postsArray.push(post)
        console.log(currentIndex)
        wrapper.style.setProperty("--background-image", `url(${posts[currentIndex].image})`)
        postContainer.append(postsArray[currentIndex])

        arrowIconUp.addEventListener("click", (e)=>{
            if(currentIndex === 0){
                currentIndex = postsArray.length - 1
                post.remove()
                postContainer.append(postsArray[currentIndex])
                wrapper.style.setProperty("--background-image", `url(${posts[currentIndex].image})`)
                body.dataset.theme = currentIndex
            } else{
                --currentIndex
                post.remove()
                postContainer.append(postsArray[currentIndex])
                wrapper.style.setProperty("--background-image", `url(${posts[currentIndex].image})`)
                body.dataset.theme = currentIndex
            }
        })
        arrowIconDown.addEventListener("click", (e)=>{
            if(currentIndex === postsArray.length -1){
                currentIndex = 0
                post.remove()
                postContainer.append(postsArray[currentIndex])
                wrapper.style.setProperty("--background-image", `url(${posts[currentIndex].image})`)
                body.dataset.theme = currentIndex
            } else{
                ++currentIndex
                post.remove()
                postContainer.append(postsArray[currentIndex])
                wrapper.style.setProperty("--background-image", `url(${posts[currentIndex].image})`)
                body.dataset.theme = currentIndex
            }
        })
        
     
    } 
} 
export default carousel
