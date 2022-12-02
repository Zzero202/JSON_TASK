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
       <td><button onclick='getDetails(event)+getComments(event)' class='info' id='${post.id}'>Read More</button>
       </tr>`
       //    console.log(post.id)
       //    console.log(content)
    })
});
let details = document.getElementById('details');

function getDetails(e){
  fetch(`${url}/posts/${e.target.id}`)
  .then(res=>res.json())
  .then(res=>{
   
        details.innerHTML = `
        <h3>Details of the Post</h3>
        <h5>title: ${res.title}</h5>
        <p>Description: ${res.body}</p>
        <p>Tags: ${res.tags}</p>
        <p>userId: ${res.userId}</p>
        <hr>
        `
       
    
  })
}

let comments = document.getElementById('comments');
function getComments(e){
  comments.innerHTML = '';
  console.log(comments);
  fetch(`${url}/posts/${e.target.id}/comments`)
    .then(res=>res.json())
    .then(res=>{
      // console.log(res.comments.length);
      res.comments.map(comment=>{
          comments.innerHTML += `
          <p>${comment.body}</p>
          <p>postId : ${comment.postId}</p>
          <h4>${comment.user.username} commented in this post</h4>
          `
    })
    
    })
  }
  
  
