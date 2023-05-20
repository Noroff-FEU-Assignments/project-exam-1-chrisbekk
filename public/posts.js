import renderPost from "../components/renderPost.js";
import fetchAPI from "../utils/dataFetching.js";
const latestPosts = document.querySelector(".latest")
const postSection = document.querySelector(".post-section")

async function main(){
    const posts = await fetchAPI.posts()
    console.log(posts)
    
    for(let i = 0; i < 4; i++){
        latestPosts.append(renderPost(posts[i]))
    }
    for(let i = 4; i < posts.length; i++){
        const container = document.createElement("div")
        container.append(renderPost(posts[i]))
        container.classList.add("wrapper")
        container.style.setProperty("--background-image", `url(${posts[i].image})`)
        postSection.append(container)
    }
    
}

main()
