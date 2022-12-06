let content =  document.getElementById('content')
var url = 'https://dummyjson.com';
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
       <button onclick='getDetails(event)+getComments(event)' class='info' id='${post.id}'><img src='images/comment.png' width='15'> Read More</button>   
       <div class="posts-comments-holder">

       <div id="${post.id}d" class='details'> 

       </div>
 
       <div id="${post.id}c" class='comments'> 
     
       </div>
       </div>
    </div>
       ` 

       
     
       
       //    console.log(post.id)
       //    console.log(content)
    })
});
function getDetails(e){
  fetch(`${url}/posts/${e.target.id}`)
  .then(res=>res.json())
  .then(res=>{
    let details = document.getElementById(e.target.id +'d');
        details.innerHTML = `
        <h3>Details of the Post</h3>
        <h5 class='body'>title: <span>${res.title}</span></h5>
        <p class='desc'>Description: <span> ${res.body}</span></p>
        <p class='tags'>Tags:<span> ${res.tags}</span></p>
        <hr>
        `
       
    
  })
}

function getComments(e){
  let comments = document.getElementById(e.target.id+'c');
  comments.innerHTML = '<h3>Comments</h3>';
  console.log(comments);
  fetch(`${url}/posts/${e.target.id}/comments`)
    .then(res=>res.json())
    .then(res=>{
      // console.log(res.comments.length);
      res.comments.map(comment=>{
          comments.innerHTML += `
          <div class='comments-username-body'>
          <p class='username'><span><img src="images/img_avatar.png" alt="Avatar" class="avatar">${comment.user.username}</span></p>
          <p class'body'><span>${comment.body}</span></p>
          </div>
          `
    })
    
    })
  }
  

  


