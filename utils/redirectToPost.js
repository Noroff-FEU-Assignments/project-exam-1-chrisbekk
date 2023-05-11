function redirectToPost(post){
    const redirect = "post.html"
    document.location.href = `post.html${post.id}`
}

export default redirectToPost