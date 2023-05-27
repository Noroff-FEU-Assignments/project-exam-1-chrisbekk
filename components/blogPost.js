function renderBlogPost(post){
    const postCard = document.createElement("div")
    postCard.classList.add("post-card")
    
    for(let i = 0; i < post.category.length; i++){
        const cat = `category-${i}`
        postCard.setAttribute(cat, post.category[i])
    }
    
    const image = document.createElement("img")
    image.src = post.image
    image.alt = post.alt
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
    button.role = "button"
    button.ariaLabel = "Read Post"
    button.addEventListener("click", (e)=>{
        document.location.href = `post.html?id=${post.id}`
    })
    blogDetails.append(button)


    const date = document.createElement("p")
    date.classList.add("blog-date")
    date.textContent = post.date
    postCard.append(date)    
    postCard.append(blogDetails)

    return postCard
}

export default renderBlogPost