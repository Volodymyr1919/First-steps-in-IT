import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import posts from "./posts.scss";

export default function Posts() {

    const [posts, setPosts] = useState("");

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
        await fetch(url + "/posts", requestOptions)
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());
          setPosts(data);
        console.log(data);
          
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
            <ol className="posts">
                {Array.from(posts).map(item => <li className="post" key={item._id} data-category="CSS JavaScript">
                    <article>
                        <figure>
                            <a href="'" target="_blank">
                            <img src={item.image} alt="" />
                            </a>
                            <figcaption>
                            <ol className="post-categories">
                                <li>
                                <a href="'">{item.title}</a>
                                </li>
                                <li>
                                <a href="'">{item.status}</a>
                                </li>
                            </ol>
                            <h2 className="post-title">
                                <a href="'" target="_blank">{item.description}</a>
                            </h2>
                            </figcaption>
                        </figure>
                    </article>
                </li>)}
                
            </ol>
        </div>
    );
}