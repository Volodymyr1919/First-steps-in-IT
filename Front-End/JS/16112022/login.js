let url = "http://65.109.13.139:9191";
document.getElementById("logIn").addEventListener("click", function () 
{
    try {
        if (document.getElementById("logemail").value != ""){
            new Promise((resolve, reject) => {
                resolve();
            }).then(function() {
                return signIn();
            }).then(function() {
                return location.href = 'index.html'
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
        if (document.getElementById("sign_upName").value != ""){
            new Promise((resolve, reject) => {
                resolve();
            }).then(function() {
                return signUp();
            }).then(function() {
                return location.href = 'index.html'
            })
        }else{
            return error;
        };
    } catch (error) {
        location.href = '404.html';
    }
})
async function signIn()
{
    console.log('start');
    await fetch(url + "/signin",
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
            "username": document.getElementById("logemail").value,
            "password": document.getElementById("logpass").value
        })
    }).then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
    })
}
async function signUp()
{
    await fetch(url + "/signup",
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

                "username" : document.getElementById("sign_upName").value,
                "password" : document.getElementById("sign_upPassword").value,
                "confirm_password" : document.getElementById("sign_upPasswordConf").value
            })
        }).then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            localStorage.setItem("token", response.token);
        });
}