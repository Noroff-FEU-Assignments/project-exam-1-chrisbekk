function renderBlogPost(post){
    const postCard = document.createElement("div")
    postCard.classList.add("post-card")
    
    const image = document.createElement("img")
    image.src = post.image
    postCard.append(image)

    const blogDetails = document.createElement("div")
    blogDetails.classList.add("blog-details-container")

    const title = document.createElement("p")
    title.classList.add("blog-title")
    title.textContent = post.title
    blogDetails.append(title)

    const subtitle = document.createElement("p")
    subtitle.classList.add("blog-subtitle")
    subtitle.textContent = post.subtitle
    blogDetails.append(subtitle)

    const button = document.createElement("button")
    button.classList.add("button")
    button.textContent = "Read"
    button.addEventListener("click", (e)=>{
        document.location.href = `post.html?id=${post.id}`
    })
    blogDetails.append(button)
    
    postCard.append(blogDetails)

    return postCard
}

export default renderBlogPost