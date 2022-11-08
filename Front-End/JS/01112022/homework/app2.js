console.log("ready");
let server_url = "https://gorest.co.in/public/v2/users/19";
document.getElementById("connect").addEventListener("click", function () 
    {
        _requestLogin();
    });
document.getElementById("user1").addEventListener("click", function () 
    {
        _requestUserFT();
    });
function _requestUserFT()
{
    fetch(server_url,
        {
            method: 'GET',
            headers:
            {
                "Contetnt-Type" : "application/json",
                "Authorization": "Bearer 59b6134f99a9c199998761f087b5d02de1afa4830f9982a88bfd940284271d74"
            }
        }).then(function(response){return response.json()}).then((data)=>{console.log(data.name); localStorage.setItem("First Request", data.name)})
}
new Promise((resolve, reject) => {
    resolve();
}).then(function _requestLogin()
{
    let _postObj = 
    {
        "name" : "ViValdy",
        "email" : "some@gogol.com",
        "gender" : "male",
        "status" : "active"
    };
    fetch(server_url, 
        {
            method: 'PUT',
            headers: 
            {
                "Contetnt-Type" : "application/json",
                "Authorization" : "Bearer 59b6134f99a9c199998761f087b5d02de1afa4830f9982a88bfd940284271d74"
            },
            body: JSON.stringify(_postObj) 
        }).then(function(response){return response;}).then((data) => {console.log(data);
            if(data.status !== "200")
                {
                    alert("unsuccess in PUT function");
                }
            });
}).then(function _requestUser()
{
    fetch(server_url,
    {
        method: 'GET',
        headers:
        {
            "Contetnt-Type" : "application/json",
            "Authorization": "Bearer 59b6134f99a9c199998761f087b5d02de1afa4830f9982a88bfd940284271d74"
        }
    }).then(function(response){return response.json()}).then((data)=>{console.log(data.name);localStorage.setItem("Second Request", data.name);
        if (localStorage.getItem("First Request") != localStorage.getItem("Second Request"))
        {
            alert("success");
        }
        else
        {
            alert("unsuccess with changing data");
        }
    })
})

