let pageURL = window.location.href;
console.log(pageURL)
let id = pageURL.substring(pageURL.lastIndexOf('=') + 1);


let details = document.getElementById('details');
let url = 'https://dummyjson.com';
function getDetails(e){
  fetch(`${url}/posts/${e}`)
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
    fetch(`${url}/posts/${e}/comments`)
    .then(res=>res.json())
    .then(res=>{
     res.comments.map(comment=>{
      comments.innerHTML += `
      <div class='comments-username-body'>
      <p class='username'><img src="images/img_avatar.png" alt="Avatar" class="avatar">
      <span>${comment.user.username}</span></p>
      <p class'body'><span>${comment.body}</span></p>
      </div>
      `
         
    })
    })
  }
  
  
  

getDetails(id);
getComments(id)