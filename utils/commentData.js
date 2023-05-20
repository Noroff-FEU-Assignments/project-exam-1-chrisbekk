async function postComment(postID, name, comment){
    this.preventDefault()
    const commentData = {
        post: postID,
        author_name: name.value,
        author_email: "mail@email.com",
        content: comment.value
    }

    await fetchAPI.postComment(commentData)
    setTimeout(async() => {
        const res = await fetchAPI.getComments(postID)
        console.log(res)
    }, 500);
}

export default postComment