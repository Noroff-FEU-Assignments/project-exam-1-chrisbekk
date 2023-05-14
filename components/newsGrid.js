const newsGrid = document.querySelector(".news-grid")
const postsContainers = document.querySelectorAll(".news-item")
console.log(postsContainers)
function renderNewsGrid(newsPosts){
    console.log(newsPosts)
    for(let i = 0; i < newsPosts.length; i++){
        const post = newsPosts[i]
        const container = postsContainers[i]
        const postTitle = document.createElement("p")
        const tag = document.createElement("p")
        tag.classList.add("tag")
        tag.textContent = post.tags[0]
        postTitle.classList.add("title")
        postTitle.textContent = post.title
        container.style.backgroundImage =`url(${post.image})`
        container.append(tag, postTitle)
        
    }
}

export default renderNewsGrid