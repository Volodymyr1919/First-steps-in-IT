import React from "react";
import Auth from "./Auth/Auth";
// eslint-disable-next-line no-unused-vars
import User from "./User/User";
// eslint-disable-next-line no-unused-vars
import Users from "./User/Users/Users";
// eslint-disable-next-line no-unused-vars
import Followers from "./User/Followers/Followers";
// eslint-disable-next-line no-unused-vars
import Followings from "./User/Followings/Followings";
// eslint-disable-next-line no-unused-vars
import Posts from "./Posts/Posts";

function App() {
  return (
    <div className="App">
       <Auth />
      {/* <br />
      <br />
      <User /> */}
      {/* <Followers /> */}
      {/* <Followings /> */}
      {/* <Users /> */}
      <Posts />
    </div>
  );
}

export default App;
