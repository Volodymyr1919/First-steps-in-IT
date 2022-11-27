let url = "https://1ae0-37-186-127-62.eu.ngrok.io";
document.getElementById("logIn").addEventListener("click", function () 
{
    try {
        if (document.getElementById("username").value != ""){
            new Promise((resolve, reject) => {
                resolve();
            }).then(function(){
                return signIn();
            }).then(function() {
                location.href = 'home.html'
            })
        }else{
            return error;
        };
    } catch (error) {
        location.href = '404.html';
    }
});
document.getElementById("signUp").addEventListener("click", function(){
    try {
        location.href = 'index.html';
    } catch (error) {
        location.href = '404.html';
    }
})
function signIn()
{
    console.log('start');
    fetch(url + "/signin",
    {
        method: 'POST',
        headers:
        {
            "Content-type" : "application/json",
            "Access-Control-Allow-Origin": "*",
            "User-Agent" : "telran",
            "ngrok-skip-browser-warning": "69420"
        },
        body: JSON.stringify
        ({
            "username": document.getElementById("username").value,
            "password": document.getElementById("userpassword").value
        })
    }).then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
    })
}
