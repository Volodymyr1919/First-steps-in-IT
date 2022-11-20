function getHeaders() {
    return {
        "Content-type" : "application/json",
        "Access-Control-Allow-Origin": "*",
        "x-access-token" : localStorage.getItem("token") || ""
    }
}

let requests = function() {};

requests.prototype.post = function(url, sendData) {
    fetch(url,{
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(sendData)
    }).then((response) => {
        return response.json();
    })
    .then((response) => {
        return response;
    })
}

requests.prototype.get = function(url, next) {
    console.log("started get function");
    fetch(url,{
        method: 'GET',
        headers: getHeaders(),
    }).then (data => data.json())
    .then(data => { 
        next(data);
    });
}
requests.prototype.delete = function(url){
    fetch(url,{
        method: 'DELETE',
        headers: getHeaders()
    }).then(() => {
        localStorage.clear();
    })
}
requests.prototype.logout = async function (url){
    await fetch (url, {
        method: 'POST',
        headers: getHeaders()
    })
}