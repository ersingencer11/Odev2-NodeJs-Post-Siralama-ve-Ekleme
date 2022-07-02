const posts = [
    {name:"1.Post", content:"1.Icerik"},
    {name:"2.Post", content:"2.Icerik"},
    {name:"3.Post", content:"3.Icerik"}
]

const listele = () => {
    posts.map((post)=>{
        console.log(post.name)
    })
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) =>{
        posts.push(newPost)
        resolve(posts)
    })
    return promise1
}

async function showPosts(post){
    try {
        await addPost(post)
        listele()
    } catch (error) {
        console.log(error)
    }
}

let post = {name:"5.Post", content:"5.Icerik"}
showPosts(post)
