console.log("ready");
let url = "https://1ae0-37-186-127-62.eu.ngrok.io";
document.getElementById("signUp").addEventListener("click", function () 
{
    try {
        if(document.getElementById("name").value != ""){
            new Promise((resolve, reject) => {
                resolve();
            }).then(function(){
                return signUp();
            }).then(function() {
                location.href = 'home.html'
            })
        } else{
            return error;
        }
    } catch (error) {
        location.href = '404.html';
    }
});
document.getElementById("logIn").addEventListener("click", function(){
    try {
        location.href = 'signin.html';
    } catch (error) {
        location.href = '404.html';
    }
});
let _AUTH = "";
function signUp()
{
    fetch(url + "/signup",
        {
            method: 'POST',
            headers: 
            {
                "Content-type" : "application/json",
                "Access-Control-Allow-Origin": "*",
                "User-Agent" : "telran",
                "ngrok-skip-browser-warning": "69420"
            },
            body: JSON.stringify({

                "username" : document.getElementById("name").value,
                "password" : document.getElementById("password").value,
                "confirm_password" : document.getElementById("confirm-password").value
            })
            
        }).then(function (response) {
            _AUTH = JSON.stringify(response.body);
        });
}