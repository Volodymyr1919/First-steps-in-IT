import React, { useState, useEffect }   from "react";
// eslint-disable-next-line no-unused-vars
import followers                        from "./followers.scss";

export default function Followers() {

    const [followers, setFollowers] = useState("");

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
        await fetch(url + "/followers", requestOptions)
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());
          setFollowers(data.followers);
          
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
  
    return(
        <div>
            <div className="content">
                <div className="user-list">
                {Array.from(followers).map(item => <div key={item._id} className="user-row">
                        <div className="user">
                            <div className="avatar-content">
                                <img className="avatar" src={item.avatar} alt=""/>
                            </div>
                            <div className="user-body">
                                <div className="skills">
                                    <span className="subtitle">{item.username}</span>
                                </div>
                            </div>
                        </div>
                        <div className="user-option">
                            <button
                              className="btn btn-follow"
                              type="button"
                              disabled
                            >
                              Followed me
                            </button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}