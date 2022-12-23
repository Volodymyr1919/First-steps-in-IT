(function (){
    requests.prototype.get(`${getUrl()}/followers`, showFollowers);
}())

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
  class Friend extends Family{
  
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
  console.log(friendAddress);