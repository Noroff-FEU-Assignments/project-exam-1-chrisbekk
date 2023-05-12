const featuredContainer = document.querySelector(".featured-articles-container")
const carouselContainer = document.querySelector(".carousel")
const button = document.querySelector(".button")
const progressBar = document.querySelector(".progress-bar")
function carousel(posts){
    console.log(posts)
    let currentIndex = 0
    const postsArray = []
    for(let i = 0; i < posts.length; i++){
        const currentPost = posts[i]
        const post = document.createElement("div")
        post.classList.add("post-card")

        const image = document.createElement("img")
        image.src = currentPost.image
        image.classList.add("carousel-image")

        const postDetails = document.createElement("div")
        postDetails.classList.add("post-details")
        const postTitle = document.createElement("h2")
        postTitle.classList.add("post-title")
        postTitle.textContent = currentPost.title
        postDetails.append(postTitle)

        post.append(image, postDetails)
        postsArray.push(post)
        
        const progressItem = document.createElement("div")
        progressItem.classList.add("progress-bar-item")
        progressBar.append(progressItem)

        post.addEventListener("mouseenter", (e)=>{
            e.target.dataset.active = true
        })
        post.addEventListener("mouseleave", (e)=>{
            e.target.dataset.active = false
        })

        
    }
    console.log(progressBar.querySelectorAll(".progress-bar-item"))
    const progressBarItems = progressBar.querySelectorAll(".progress-bar-item")

    carouselContainer.append(postsArray[currentIndex])
    progressBarItems[currentIndex].dataset.active = true
    button.addEventListener("click", ()=>{
        if(currentIndex == postsArray.length-1){
            currentIndex = 0
            carouselContainer.innerHTML = ""
            carouselContainer.append(postsArray[currentIndex])
            progressBarItems[currentIndex + 2].dataset.active = false
            progressBarItems[currentIndex].dataset.active = true
        } else{
            carouselContainer.innerHTML = ""
            ++currentIndex
            progressBarItems[currentIndex-1].dataset.active = false
            carouselContainer.append(postsArray[currentIndex])
            progressBarItems[currentIndex].dataset.active = true
        }

    })
}

export default carousel