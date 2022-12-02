var page = window.location.href;
vars = {};
page.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
 key = decodeURIComponent(key);
 value = decodeURIComponent(value);
 //console.log(value)
 value = value.replace(' ', '');
 value = parseInt(value);
//  console.log(typeof(value))
 vars[key] = value;
});

let idNum = vars.id;

let details = document.getElementById('details');
var url = 'https://dummyjson.com';
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
          
      <p class'body'><span>${comment.body}</span></p>
      <h4 class='username'><span>${comment.user.username}</span> commented in this post</h4>
      `
         
    })
    })
  }
  
  
  

getDetails(idNum);
getComments(idNum)