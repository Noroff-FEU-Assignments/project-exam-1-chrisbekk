function renderPost(post){
    console.log(post)
    const item = document.createElement("div")
    item.classList.add("post")

    const image = document.createElement("img")
    image.src = post.image
    const postDetails = document.createElement("div")
    postDetails.classList.add("post-details-container")
    const postDate = document.createElement("p")
    postDate.classList.add("post-date")
    postDate.textContent = post.date
    const title = document.createElement("h3")
    title.classList.add("card-title")
    title.textContent = post.title
    const button = document.createElement("p")
    button.classList.add("read-btn")
    button.textContent = "Read"
    button.addEventListener("click", (e)=>{
        
        item.parentElement.dataset.clicked = item.parentElement.dataset.clicked === "true" ? "false" : "true"
        item.remove()
        setTimeout(() => {
            document.location.href = `post.html?id=${post.id}`
        }, 400);
        
    })
    postDetails.append(postDate, title, button)
    item.append(image, postDetails)

   
    return item

}

export default renderPost