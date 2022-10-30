console.log("Am ready");
function server_request()
{
    const requestURL = 'https://random-data-api.com/api/address/random_address';

    var xhr  = new XMLHttpRequest();
    xhr.open('GET', requestURL, true);
    xhr.onload = function () 
    {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200")
    {
      console.log(users);
    }
    else 
    {
      console.error(users);
    }
    xhr.responseText.substring();
    console.log(users.id, users.city, users.country);
    document.write("id is: ", users.id,";"," City: ", users.city,";", " Country is: ", users.country);
    }
    xhr.send(null);
}
server_request();


