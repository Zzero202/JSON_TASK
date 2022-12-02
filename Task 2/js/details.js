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
        <tr><td>${res.title}</td>
        <td class='description'>${res.body.slice(0,90)+ '.....'}</td>
        <td>
        </tr>` 
    
  })
}

let comments = document.getElementById('comments');
function getComments(e){
    fetch(`${url}/posts/${e}/comments`)
    .then(res=>res.json())
    .then(res=>{
     res.comments.map(comment=>{
          comments.innerHTML +=`<pre>${comment.body}</pre>`
         
    })
    })
  }
  
getDetails(idNum);
getComments(idNum)