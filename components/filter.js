function filterHandler(){
    const posts = document.querySelectorAll(".post-card")
    const filterBtns = document.querySelector(".filter-btns").children
    const header = document.querySelector(".section-header")
    console.log(filterBtns)
    
    for(let i = 0; i < filterBtns.length; i++){
        
        filterBtns[i].addEventListener("click", (e)=>{
            document.querySelectorAll(".button").forEach(btn => btn.style.backgroundColor = "#F9B752")
            e.target.style.backgroundColor = "#009883"
            if(e.target.textContent === "All Posts"){
                posts.forEach(post => post.style.display = "block")
                header.textContent = "All Posts"
                
            } else{
                const currentCategory = e.target.textContent
                header.textContent = `All ${currentCategory}`
                
                posts[i].style.display = "none"
                for(let i = 0; i < posts.length; i++){
                    // Check each post to see if button clicked corresponds to post category
                    if(currentCategory === posts[i].getAttribute("category-0") || currentCategory === posts[i].getAttribute("category-1") || currentCategory === posts[i].getAttribute("category-2")){
                        posts[i].style.display = "block"
                        
    
                    } else{
                        posts[i].style.display = "none"
                        
                    }
                }
            }


        })


    }

}

export default filterHandler