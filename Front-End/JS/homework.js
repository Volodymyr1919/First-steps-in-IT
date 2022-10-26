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
    let userID = posts.filter(value => value.userId == 1);
    let post_count = userID.length;
    console.log(post_count);
    let userID2 = posts.filter(value => value.userId == 2);
    let post_count2 = userID2.length;
    console.log(post_count2);
    let userID3 = posts.filter(value => value.userId == 3);
    let post_count3 = userID3.length;
    console.log(post_count3);
    let userID4 = posts.filter(value => value.userId == 4);
    let post_count4 = userID4.length;
    console.log(post_count4);
    let userID5 = posts.filter(value => value.userId == 5);
    let post_count5 = userID5.length;
    console.log(post_count5);
    let userID6 = posts.filter(value => value.userId == 6);
    let post_count6 = userID6.length;
    console.log(post_count6);
    let userID7 = posts.filter(value => value.userId == 7);
    let post_count7 = userID7.length;
    console.log(post_count7);
    let userID8 = posts.filter(value => value.userId == 8);
    let post_count8 = userID8.length;
    console.log(post_count8);
    let userID9 = posts.filter(value => value.userId == 9);
    let post_count9 = userID9.length;
    console.log(post_count9);
    let userID10 = posts.filter(value => value.userId == 10);
    let post_count10 = userID10.length;
    console.log(post_count10);
    if (posts.filter(value => value.userId > 0))
    {
        for (let i = 1; i < post_count; i++)
        {
            let a = posts.filter(value => value.userId == i)
            let b = a.length;
            console.log("posts are: ", b);
        }
    }
}
xml.send(null);
