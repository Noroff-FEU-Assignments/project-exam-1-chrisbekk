const fetchAPI = {
    baseURL: "https://theupload.wp-cms.online/wp-json/wp/v2/",
    domain: "https://theupload.wp-cms.online",
    posts: async function(){
        const response = await fetch(`${this.baseURL}posts?_embed=`)
        const data = await response.json()
        const posts = []

        function Post(id, date, title, content, excerpt, subtitle, image, category, tags, comments ){
            this.id = id,
            this.date = date,
            this.title = title,
            this.content = content,
            this.excerpt = excerpt,
            this.subtitle = subtitle,
            this.image = image,
            this.category = category,
            this.tags = tags,
            this.comments = comments
        }
        data.forEach(post => {
            
            const getCategories = post._embedded["wp:term"]
            const details = getCategories.flat()
            const tags = []
            details.forEach(tag =>{
                if(tag.link.includes("tag")){
                    tags.push(tag.name)
                }
            })
            const categories = []
            details.forEach(cat =>{
                if(cat.link.includes("category")){
                    
                    categories.push(cat.name)
                }
            })
            
            const newDate = new Date(post.date).toString().slice(4,15)
            const removeHTMLTags = input => new DOMParser().parseFromString(input, "text/html").body.innerText
            const excerpt = removeHTMLTags(post.excerpt.rendered)
            const content = removeHTMLTags(post.content.rendered)
            
            
            posts.push(new Post(post.id, newDate, post.title.rendered, content, excerpt, post.wps_subtitle, post.fimg_url, categories, tags));
        });
        
        
        return posts
    },
    getComments: async function(id){
        const response = await fetch(`${this.baseURL}comments?post=${id}`)
        const comments = await response.json()
        return comments
    }
}

export default fetchAPI