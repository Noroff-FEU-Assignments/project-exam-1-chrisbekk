import navBar from "../components/navBar.js";
import fetchAPI from "../utils/dataFetching.js"
import carousel from "../components/carousel.js";
async function main(){
    navBar()
    const postsFeatured = await fetchAPI.posts("categories=7")
    console.log(postsFeatured)
    carousel(postsFeatured)
}

main()