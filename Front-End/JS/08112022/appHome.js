let url = "https://1ae0-37-186-127-62.eu.ngrok.io";
document.getElementById("logOut").addEventListener("click", function () 
{
    try {
        new Promise((resolve, reject) => {
            resolve();
        }).then(function(){
            return logOut();
        }).then(function() {
            location.href = 'signin.html';
        })
    } catch (error) {
        location.href = '404.html';
    }
});
document.getElementById("_getMe").addEventListener("click", function () 
{
    try {
        _getMe();
    } catch (error) {
        location.href = '404.html';
    }
});
document.getElementById("newInfo").addEventListener("click", function () 
{
    try {
        newInfo();
    } catch (error) {
        location.href = '404.html';
    }
});
function _getMe()
{
    fetch(url + "/me",
    {
        method: 'GET',
        headers:
        {
            "Content-type" : "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent" : "telran",
            "ngrok-skip-browser-warning": "69420",
            "x-access-token" : localStorage.getItem("token")
        }
    }).then (data => data.json())
    .then(data => { 
        document.getElementById('myData').innerHTML = "ID is: " + data._id + `<br>` + "Name is: " + data.username + `<br>` + "Age is: " + data.age + `<br>` + "Avatar is: " + data.avatar;
        console.log("ID is: ", data.id);
        console.log("Name is: ", data.username);
    });
}
function logOut()
{
    fetch(url + "/destroy-session",
    {
        method: 'POST',
        headers:
        {
            "Content-type" : "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent" : "telran",
            "ngrok-skip-browser-warning": "69420",
            "x-access-token" : localStorage.getItem("token")
        }
    });

}
function newInfo(){
    fetch(url + "/me", {
        method: 'PUT',
        headers: {
            "Content-type" : "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent" : "telran",
            "ngrok-skip-browser-warning": "69420",
            "x-access-token" : localStorage.getItem("token")
        },
        body: JSON.stringify({
            "avatar": document.getElementById('newAvatar').value,
            "age": document.getElementById('newAge').value
        })
    }).then (data => data.json())
    .then(data => { 
        document.getElementById('updatedData').innerHTML = "ID is: " + data._id + `<br>` + "Name is: " + data.username + `<br>` + "Age is: " + data.age + `<br>` + "Avatar is: " + data.avatar;
        console.log("ID is: ", data.id);
        console.log("Name is: ", data.username);
        console.log("Age is: ", data.age);
        console.log("Avatar is: ", data.avatar);
    });
}