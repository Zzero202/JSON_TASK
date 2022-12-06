let content =  document.getElementById('content')
let url = 'https://dummyjson.com'
fetch(`${url}/posts`)
.then(res => res.json())
.then(res=>{
    res.posts.map(post=>{
        //console.log(res);
        content.innerHTML += `
        <div class='post-content'>
        <div class='post'>
       <h4>${post.title}</h4>
       <p>${post.body}</p>
       </div>
       <button onclick='goForDetails(event)+getComments(event)' class='info' id='${post.id}'><img src='images/comment.png' width='15'> Read More</button>   
        </div>
       `
       //    console.log(post.id)
       //    console.log(content)
    })
});

function goForDetails(e){
    console.log(e.target.id);
    let href = e.target.id;
    const pageURL = `post-details.html?id=${href}`;
    window.location.href = pageURL;

}