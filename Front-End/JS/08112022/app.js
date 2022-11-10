console.log("ready");
document.getElementById("signUp").addEventListener("click", function () 
{
    signUp();
});
document.getElementById("logIn").addEventListener("click", function () 
{
    signIn();
});
let _AUTH = "";
function signUp()
{
    fetch("https://8fd4-2a02-2a57-4052-0-145f-d48e-abbc-890d.eu.ngrok.io" + "/signup",
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
function signIn()
{
    fetch("https://8fd4-2a02-2a57-4052-0-145f-d48e-abbc-890d.eu.ngrok.io" + "/signin",
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
    }).then((response) => 
    {
        localStorage.setItem("token", response.body);
    })
}