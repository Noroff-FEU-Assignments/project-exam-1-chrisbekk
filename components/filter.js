function filterHandler(){
    const posts = document.querySelectorAll(".post-card")
    const filterBtns = document.querySelector(".filter-container").children
    
    console.log(filterBtns)
    
    for(let i = 0; i < filterBtns.length; i++){
        
        filterBtns[i].addEventListener("click", (e)=>{
            const currentCategory = e.target.textContent
            
            e.target.dataset.clicked = e.target.dataset.clicked === "true" ? "false" : "true"
            
            for(let i = 0; i < posts.length; i++){
                // Check each post to see if button clicked corresponds to post category
                if(currentCategory === posts[i].getAttribute("category-0") || currentCategory === posts[i].getAttribute("category-1") || currentCategory === posts[i].getAttribute("category-2")){
                    posts[i].classList.toggle("filter")
                    posts[i].classList.toggle("hide")

                } else{
                    posts[i].classList.toggle("hide")
                    posts[i].classList.toggle("filter")
                }
            }

        })


    }

}

function getCategory(category){



}




export default filterHandler