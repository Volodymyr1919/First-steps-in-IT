const requestURL = 'https://jsonplaceholder.typicode.com/users';
// Get all users
var xhr  = new XMLHttpRequest();
xhr.open('GET', requestURL, true);
xhr.onload = function () {
var users = JSON.parse(xhr.responseText);
 if (xhr.readyState == 4 && xhr.status == "200")
 {
   console.log(users);
 }
 else 
 {
   console.error(users);
 }
users.sort((a,b) => a.name > b.name ? 1 : -1);
console.log(users.name);
}
xhr.send(null);

const requestURL1 = 'https://jsonplaceholder.typicode.com/posts';
let xml = new XMLHttpRequest();

xml.open('GET', requestURL1, true);


xml.onload = function ()
{
    let posts = JSON.parse(xml.response);
    if (xml.readyState == 4 && xml.status == "200")
    {
        console.log(posts);
    }
    else
    {
        console.error(posts);
    }
    let userID = posts.filter(value => value.userId > 0);
    let post_count = userID.length;
    if (userID)
    {
        for (let i = 1; i < post_count; i++)
        {
            let a = posts.filter(value => value.userId == i);
            let b = a.length;
            console.log("posts of user "+i+":" , b);
            if (b == 0)
            {
                break;
            };
            document.write("posts of user "+i+": " , b, "; ");
        }
    }
}
xml.send(null);
