(function (){
    requests.prototype.get(`${getUrl()}/followings`, showFollowings);
}())
document.getElementById("allUsers").addEventListener("click", function(){
    requests.prototype.get(`${getUrl()}/users`, showUsers);
});
let selectedButton;
document.getElementById("showUsers").onclick = function (event) {
  let target = event.target;
  if (target.tagName != "BUTTON") return;
  subscribe(target);
};
function subscribe(button) {
    selectedButton = button;
    console.log(button.id);
    fetch(getUrl() + "/follow", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "telran",
        "ngrok-skip-browser-warning": "69420",
        "x-access-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        "username": button.id
      })
    })
};