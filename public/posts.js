import fetchAPI from "../utils/dataFetching.js"
import navBar from "../components/navBar.js"
import renderBlogPost from "../components/blogPost.js"
import filterHandler from "../components/filter.js"
const blogContainer = document.querySelector(".blog-container")
const addPostsBtn = document.getElementById("addPosts")





async function main(){
    navBar()
    
    let postCount = 10
    let postIncrement = 10
    const posts = await fetchAPI.posts(`per_page=${postCount}`)
    
    let indexStart = 0
    for(let i = indexStart; i < postCount; i++){
        blogContainer.append(renderBlogPost(posts[i]))
    }
    filterHandler()
    addPostsBtn.addEventListener("click", async (e)=>{
        
        indexStart = postCount
        postCount = postCount + postIncrement
        const posts = await fetchAPI.posts(`per_page=${postCount}`)
        for(let i = indexStart; i < posts.length; i++){
           blogContainer.append(renderBlogPost(posts[i]))
            
       
        }
        if(postCount > posts.length){
            const postLimit = document.createElement("p")
            postLimit.classList.add("body-text")
            postLimit.textContent = "There are no more posts. Await my next adventure!"
            blogContainer.append(postLimit)
            addPostsBtn.remove()
        }
    })

}
main()

