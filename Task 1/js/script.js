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
        <h5 class='body'>title: <span>${res.title}</span></h5>
        <p class='desc'>Description: <span> ${res.body}</span></p>
        <p class='tags'>Tags:<span> ${res.tags}</span></p>
        <hr>
        `
       
    
  })
}

let comments = document.getElementById('comments');
function getComments(e){
  comments.innerHTML = '<h3>Comments</h3>';
  console.log(comments);
  fetch(`${url}/posts/${e.target.id}/comments`)
    .then(res=>res.json())
    .then(res=>{
      // console.log(res.comments.length);
      res.comments.map(comment=>{
          comments.innerHTML += `
          
          <p class'body'><span>${comment.body}</span></p>
          <h4 class='username'><span>${comment.user.username}</span> commented in this post</h4>
          `
    })
    
    })
  }
  
  
