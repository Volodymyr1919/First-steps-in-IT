import React, { useState, useEffect }   from "react";
// eslint-disable-next-line no-unused-vars
import followings                       from "./followings.scss";

export default function Followings() {

    const [followings, setFollowings] = useState("");

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
        await fetch(url + "/followings", requestOptions)
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());
          setFollowings(data.following);
          
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
                {Array.from(followings).map(item => <div key={item._id} className="user-row">
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
                              Followed
                            </button>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    );
}