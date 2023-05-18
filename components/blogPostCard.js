function blogPostCard(post){
    
    const blogCard = document.createElement("div")
    blogCard.classList.add("blog-post")
    blogCard.style.backgroundImage = `url(${post.image})`
    const blogPostDetails = document.createElement("div")
    blogPostDetails.classList.add("blog-post-details")

    const blogPostTitleContainer = document.createElement("div")
    blogPostTitleContainer.classList.add("blog-post-details-row")
    const blogTitle = document.createElement("h2")
    blogTitle.classList.add("post-title")
    blogTitle.textContent = post.title
    const blogDates = document.createElement("span")
    blogDates.textContent = "May 24"
    blogPostTitleContainer.append(blogTitle, blogDates)

    const blogPostSubtitleContainer = document.createElement("div")
    blogPostSubtitleContainer.classList.add("blog-post-details-row")
    const blogSubtitles = document.createElement("p")
    blogSubtitles.textContent = post.subtitle
    blogPostSubtitleContainer.append(blogSubtitles)
    
    blogPostDetails.append(blogPostTitleContainer, blogPostSubtitleContainer)
    blogCard.append(blogPostDetails)

    return blogCard
}

export default blogPostCard