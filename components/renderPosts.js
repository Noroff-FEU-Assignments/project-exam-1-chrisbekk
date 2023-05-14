function renderPosts(element, posts){
    // Element must be a HTML class
    const DOMContainer = document.querySelector(`.${element}`)
    // Create post HTML element
    for(let i = 0; i < posts.length; i++){
      const post = document.createElement("div")
      post.classList.add("post")

      const title = document.createElement("h4")
      title.textContent = posts[i].title

      const image = document.createElement("img")
      image.classList.add("post-image")
      image.src = posts[i].image
      post.append(image, title)
      DOMContainer.append(post)
    }
    
  }

  export default renderPosts