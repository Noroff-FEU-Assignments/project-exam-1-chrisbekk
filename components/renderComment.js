function renderCommment(comment){
    const removeOuterTags = inputString => new DOMParser().parseFromString(inputString, 'text/html').body.innerText;
    const contentString = removeOuterTags(comment.content.rendered)
    const date = comment.date.slice(0, 10)
    const time = comment.date.slice(14, 19)
    console.log(comment)
    const commentCard = document.createElement("div")
    commentCard.classList.add("comment")
    
    const avatarContainer = document.createElement("div")
    avatarContainer.classList.add("avatar-container")
    const commentAuthor = document.createElement("p")
    commentAuthor.textContent = comment.author_name
    const commentAvatar = document.createElement("object")
    commentAvatar.type = "image/svg+xml"
    commentAvatar.data = "../public/assets/comment_avatar.svg"
    avatarContainer.append(commentAvatar, commentAuthor)
    

    
    const contentContainer = document.createElement("div")
    contentContainer.classList.add("content-container")
    const contentDetails = document.createElement("div")
    
    const commentDate = document.createElement("p")
    
    commentDate.textContent = `@ ${time} on the ${date}`
    
    const content = document.createElement("p")
    content.classList.add("comment-content")
    content.textContent = contentString

    contentDetails.append(commentDate)
    contentContainer.append(contentDetails, content)
    commentCard.append(avatarContainer, contentContainer)


    
    
    
    return commentCard
    
}

export default renderCommment