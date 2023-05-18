import navBar from "../components/navBar.js";
import footer from "../components/footer.js";
import fetchAPI from "../utils/dataFetching.js"
import carousel from "../components/carousel.js"
const postSection = document.querySelector(".index-posts")
async function main(){
    navBar()
    footer()
    const posts = await fetchAPI.posts("categories=7")
    carousel(posts)
    renderPosts(posts)

}

main()

function renderPosts(posts){
    console.log(posts)
    for(let i = 0; posts.length; i++){
        const currentPost = posts[i]
        const post = document.createElement("div")
        post.classList.add("post")
        post.addEventListener("click", (e)=>document.location.href = `travels.html?id=${currentPost.id}`)
        const postImage = document.createElement("img")
        postImage.src = currentPost.image
        
        const postDetailsContainer = document.createElement("div")
        postDetailsContainer.classList.add("post-details-container")
        const postTitle = document.createElement("h2")
        postTitle.classList.add("post-title")
        postTitle.textContent = currentPost.title
        
        const dateContainer = document.createElement("div")
        dateContainer.classList.add("date-container")
        const dateMonth = document.createElement("p")
        dateMonth.classList.add("post-date")
        dateMonth.textContent = currentPost.date.slice(0,3)
        const dateDay = document.createElement("p")
        dateDay.classList.add("post-date")
        dateDay.textContent = currentPost.date.slice(4,6)
        dateContainer.append(dateMonth, dateDay)

        postDetailsContainer.append(postTitle, dateContainer)

        const subtitle = document.createElement("h3")
        subtitle.classList.add("post-subtitle")
        subtitle.textContent = currentPost.subtitle


        post.append(postImage, postDetailsContainer, subtitle)
        postSection.append(post)
    }
}

