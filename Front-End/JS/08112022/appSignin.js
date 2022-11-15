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
    }).then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
    })
}
