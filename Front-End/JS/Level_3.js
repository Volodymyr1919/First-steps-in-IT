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
    localStorage.setItem("User's id", users.id);
    document.write("id is: ", users.id,";"," City: ", users.city,";", " Country is: ", users.country);
    second_request();
    }
    xhr.send(null);
}
server_request();

function second_request()
{
  fetch('https://random-data-api.com/api/address/random_address',
  {
    method: 'GET'
  }).then(response => response.json()).then(response => localStorage.setItem("User_ID", response.id));
  setTimeout("second_request()", 3000);
  comparing();
}

function comparing()
{
  let id1 = localStorage.getItem("User's id");
  let id2 = localStorage.getItem("User_ID");
  if (id1 != id2)
  {
    setTimeout(function()
    {
      location.reload();
    }, 3000);
  }
}
