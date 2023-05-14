import navBar from "../components/navBar.js";
import fetchAPI from "../utils/dataFetching.js"

async function main(){
    navBar()
    const posts = await fetchAPI.posts()
    console.log(posts)
}

main()