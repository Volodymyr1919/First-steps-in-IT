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
document.getElementById("name").innerHTML = users[0].name;
document.getElementById("name1").innerHTML = users[1].name;
document.getElementById("name2").innerHTML = users[2].name;
document.getElementById("name3").innerHTML = users[3].name;
document.getElementById("name4").innerHTML = users[4].name;
document.getElementById("name5").innerHTML = users[5].name;
document.getElementById("name6").innerHTML = users[6].name;
document.getElementById("name7").innerHTML = users[7].name;
document.getElementById("name8").innerHTML = users[8].name;
document.getElementById("name9").innerHTML = users[9].name;
}
xhr.send(null);
function _sort()
{
    let igor = document.getElementById("reverse");
    igor.setAttribute("style", "display: flex; flex-direction: column-reverse");
}


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
            document.getElementById("posts").innerHTML = b;
            document.getElementById("posts1").innerHTML = b;
            document.getElementById("posts2").innerHTML = b;
            document.getElementById("posts3").innerHTML = b;
            document.getElementById("posts4").innerHTML = b;
            document.getElementById("posts5").innerHTML = b;
            document.getElementById("posts6").innerHTML = b;
            document.getElementById("posts7").innerHTML = b;
            document.getElementById("posts8").innerHTML = b;
            document.getElementById("posts9").innerHTML = b;
        }
    }
}
xml.send(null);
// function httpGetAsync(url, callback) 
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function()
//     {
//       if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//       {
//         callback(xmlHttp.responseText);
//       }
//     };
//     xmlHttp.open('GET', url, true);
//     xmlHttp.send(null);
// }
// httpGetAsync('https://jsonplaceholder.typicode.com/users',function(e)
// {
//     console.log(e)
// }
// );
