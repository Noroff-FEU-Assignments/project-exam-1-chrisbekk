function renderPost(post){
        const postCard = document.createElement("div")
        postCard.classList.add("article-card")
        postCard.dataset.clickable = "true"
        postCard.addEventListener("click", (e)=>{
            document.location.href = `post.html?id=${post.id}`
        })
        const postDetailsContainer = document.createElement("div")
        postDetailsContainer.classList.add("card-details-container")
        // postDetailsContainer.addEventListener("click", (e)=>{
        //     document.location.href = `post.html?id=${post.id}`
        // })
        const postImage = document.createElement("img")
        postImage.src = post.image
        // postImage.dataset.clickable = "true"
        const postTitle = document.createElement("p")
        postTitle.classList.add("card-title")
        postTitle.textContent = post.title
        const postsubTitle = document.createElement("p")
        postsubTitle.classList.add("card-subtitle")
        postsubTitle.textContent = post.subtitle
        const postDate = document.createElement("p")
        postDate.classList.add("card-body-light")
        postDate.textContent = post.date
        // postTitle.dataset.clickable = "true"
        // postTitle.addEventListener("click", (e)=>{
        //     document.location.href = `post.html?id=${post.id}`
        // })
        postImage.addEventListener("click", (e)=>{
            document.location.href = `post.html?id=${post.id}`
        })
        postDetailsContainer.append(postTitle, postsubTitle, postDate)
        postCard.append(postImage, postDetailsContainer)
        return postCard
    
}



export default renderPost