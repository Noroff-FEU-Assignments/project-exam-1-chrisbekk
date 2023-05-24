import errorMessage from "../components/error.js"

const fetchAPI = {
    baseURL: "https://theupload.wp-cms.online/wp-json/wp/v2/",
    domain: "https://theupload.local",
    featuredPostsURL: "https://theupload.wp-cms.online/wp-json/wp/v2/posts?categories=7&_embed",
    posts: async function(searchPara){
        try{
            const response = await fetch(`${this.baseURL}posts?${searchPara}&_embed=`,{
                cache: 'no-store'
            })
            const data = await response.json()
            
            const posts = []
            
            function Post(id, date, title, content, excerpt, subtitle, image, alt, category, tags, comments){
                this.id = id,
                this.date = date,
                this.title = title,
                this.content = content,
                this.excerpt = excerpt,
                this.subtitle = subtitle,
                this.image = image,
                this.alt = alt
                this.category = category,
                this.tags = tags,
                this.comments = comments
            }
            data.forEach(async post => {
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
                
                const featuredMediaArray = post._embedded["wp:featuredmedia"]
                const [items] = featuredMediaArray

                const newDate = new Date(post.date).toString().slice(4,15)
                
                const removeHTMLTags = input => new DOMParser().parseFromString(input, "text/html").body.innerText
                const excerpt = removeHTMLTags(post.excerpt.rendered)
                const content = post.content.rendered
        
                posts.push(new Post(post.id, newDate, post.title.rendered, content, excerpt, post.wps_subtitle, post.fimg_url, items.alt_text, categories, tags));
                
            });
            
            
            return posts
        } catch{
            errorMessage()
        }

    },

    getComments: async function(id, param){
        const response = await fetch(`${this.baseURL}comments?post=${id}&${param}`, {
            cache: 'no-store'
        })
        const comments = await response.json()
        return comments
    },

    getPost: async function(id){
        try{
            const response = await fetch(`${this.baseURL}posts/${id}?_embed=`, {
                cache: 'default'
            })
            const data = await response.json()
            function Post(id, date, title, content, excerpt, subtitle, image, alt){
                this.id = id,
                this.date = date,
                this.title = title,
                this.content = content,
                this.excerpt = excerpt,
                this.subtitle = subtitle,
                this.image = image,
                this.alt = alt

            }
            const newDate = new Date(data.date).toString().slice(4,15)
            const removeHTMLTags = input => new DOMParser().parseFromString(input, "text/html").body.innerText
            const excerpt = removeHTMLTags(data.excerpt.rendered)
            const content = data.content.rendered
            const featuredMediaArray = data._embedded["wp:featuredmedia"]
            const [items] = featuredMediaArray


            const post = new Post(data.id, newDate, data.title.rendered, content, excerpt, data.wps_subtitle, data.fimg_url, items.alt_text)

            return post
        }catch{
            errorMessage()
        }

    },

    postComment: async function(data){
        const post = await fetch(`${this.baseURL}comments`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            cache: 'no-store'
        })
            const response = await post.json()
            console.log(response)
    }
}

export default fetchAPI
