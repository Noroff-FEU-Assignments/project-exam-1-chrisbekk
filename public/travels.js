import navBar from "../components/navBar.js";
import fetchAPI from "../utils/dataFetching.js"
import blogPostCard from "../components/blogPostCard.js";
async function main(){
    const blogParentContainer = document.querySelector(".blog-container")
    navBar()
    const posts = await fetchAPI.posts("per_page=10")
    console.log(posts)
    posts.forEach(post => {
        
        blogParentContainer.append(blogPostCard(post))
    })
}

main()