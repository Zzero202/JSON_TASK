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
       <button onclick='getDetails(event)+getComments(event)+MoreDisplay(event)' class='info' id='${post.id}'><img src='images/comment.png' width='15'> Read More</button><button onclick='LessDisplay(event)' class='read-less' id='${post.id}l'>Read Less</button>  
       <div id='${post.id}less' class="posts-comments-holder">

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
  //console.log(comments);
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
  
function MoreDisplay(e){
  let id = e.target.id;
  let Readbutton = document.getElementById(id);
  let LessButton = document.getElementById(id+'l');
  let commentDetails = document.getElementById(id+'less');
  Readbutton.style.display = 'none';
  LessButton.style.display = 'block';
  commentDetails.style.display = 'block';
  //console.log(Readbutton);
}
  
function LessDisplay(e){
let id = e.target.id;
//console.log(id);
const removeChar = id.replace(/[A-z]/g,'')
let Morebutton = document.getElementById(removeChar);
//console.log(Morebutton);
let ReadLess = document.getElementById(id+'ess');
let LessButton = document.getElementById(id);
ReadLess.style.display='none';
LessButton.style.display= 'none';
Morebutton.style.display = 'block'



}
