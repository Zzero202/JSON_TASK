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
        <tr><td>${res.title}</td>
        <td class='description'>${res.body.slice(0,90)+ '.....'}</td>
        <td>
        </tr>` 
    
  })
}

let comments = document.getElementById('comments');
function getComments(e){
    fetch(`${url}/posts/${e.target.id}/comments`)
    .then(res=>res.json())
    .then(res=>{
     res.comments.map(comment=>{
          comments.innerHTML += comment.body
         
    })
    })
  }
  
