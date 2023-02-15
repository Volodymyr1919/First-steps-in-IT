import React, { useState, useEffect }   from "react";
// eslint-disable-next-line no-unused-vars
import users                            from "./users.scss";

export default function Users() {

    const [users, setUsers] = useState("");

    let url = "http://65.109.13.139:9191";

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type"    : "application/json",
      "x-access-token"  : localStorage.getItem("token"),
    },
  };
  useEffect(() => {
    async function setMe() {
        await fetch(url + "/users", requestOptions)
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());
          setUsers(data);
        //   setAllUsers(data);
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
    setMe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
//   function setAllUsers(data) {
//     console.log(data);
//     users += users.map(item => <img key={item.title}><a href={item.link}>{item.title}</a></li>)
//   }

  async function followUser(e) {
    console.log(e.target.id);
    await fetch(url + '/follow', {
        method: "POST",
        headers: {
        "Content-Type"    : "application/json",
        "x-access-token"  : localStorage.getItem("token"),
        },
        body: {
            username : e.target.id
        }
    })
    .then((data) => {
        return data.json();
    })
    .then((data) => {
        console.log(data);
    })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }

    return(
        <div>
            <div className="content">
                <div className="user-list">
                {Array.from(users).map(item => <div key={item._id} className="user-row">
                        <div className="user">
                            <div className="avatar-content">
                                <img className="avatar" src={item.avatar} alt=""/>
                            </div>
                            <div className="user-body">
                                <a className="title" href="#/">{item.fullName}</a>
                                <div className="skills">
                                    <span className="subtitle">{item.username}</span>
                                    <span className="subtitle">{item.bio}</span>
                                </div>
                            </div>
                        </div>
                        <div className="user-option">
                            <button className="btn btn-follow" id={item.username} type="button" onClick={(e) => followUser(e)}>Follow</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}