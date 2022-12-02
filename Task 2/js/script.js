let content =  document.getElementById('content')
var url = 'https://dummyjson.com'
fetch(`${url}/posts`)
.then(res => res.json())
.then(res=>{
    res.posts.map(post=>{
        //console.log(res);
        content.innerHTML += `
       <tr><td>${post.title}</td>
       <td class='description'>${post.body.slice(0,90)+ '.....'}</td>
       <td><button onclick='goForDetails(event)' class='info' id='${post.id}'>Read More</button>
       </tr>`
       //    console.log(post.id)
       //    console.log(content)
    })
});

function goForDetails(e){
    console.log(e.target.id);
    let href = e.target.id;
    const page = `post-details.html?id=${href}`;
    window.location.href = page;

}