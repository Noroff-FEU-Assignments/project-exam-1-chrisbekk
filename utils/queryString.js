function queryString(){
    const queryString = document.location.search
    const searchParam = new URLSearchParams(queryString)
    const postID = searchParam.get("id")
    
    return postID
}

export default queryString