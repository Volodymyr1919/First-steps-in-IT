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

class Neighbours{
  constructor(){

  }
  country(){
    return "Canada";
  }
  city(){
    return "Toronto";
  }
  house(){
    return "st. Patrik 54 str.";
  }
}
class Family extends Neighbours{

  floor(){
    return 10;
  }
  appartment(){
    return 99;
  }
}
class Friend extends Neighbours{

  floor(){
    return 4;
  }
  appartment(){
    return 48;
  }
}

class Enemy extends Neighbours{

  house(){
    return "ave. Cesar 36 str."
  }
  floor(){
    return 2;
  }
  appartment(){
    return 79;
  }
}
let family = new Family();
let friend = new Friend();
let enemy = new Enemy();
let addressFamily = family.country + family.city + family.house + family.floor + family.appartment;
let friendAddress = friend.country + friend.city + friend.house + friend.floor + friend.appartment;
let enemyAddress = enemy.country + enemy.city + enemy.house + enemy.floor + enemy.appartment;
console.log(enemyAddress);
