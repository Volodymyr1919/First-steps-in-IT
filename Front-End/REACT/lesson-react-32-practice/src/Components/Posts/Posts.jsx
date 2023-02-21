import React, { useState, useEffect }   from "react";
import { useForm }                      from "react-hook-form";
// eslint-disable-next-line no-unused-vars
import posts                            from "./posts.scss";

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
  
  const [title, setTitle]              = useState("");
  const [description, setDescription]  = useState("");
  const [status, setStatus]            = useState("");
  const [img, setImg]                  = useState("");
  const [video, setVideo]              = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log("User credentials", data);
    fetch(url + "/post", {
      method: "POST",
      headers: {
        "Content-Type"      : "application/json",
        "x-access-token"    : localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title         : data.title,
        description   : data.description,
        status        : data.status,
        image         : data.img,
        video         : data.video,
      }),
    })
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());
        console.log(data);

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  };

  function _title(e) {
    setTitle(e.target.value);
  };

  function _img(e) {
    setImg(e.target.value);
  };

  function _video(e) {
    setVideo(e.target.value);
  };

  function _description(e) {
    setDescription(e.target.value);
  };
  function _status(e) {
    setStatus(e.target.value);
  }

  function getCurrentPost(item) {
    // console.log(item._id);
    fetch(url + '/post/' + item._id, {
      method: 'GET',
      headers: {
        "Content-Type"      : "application/json",
        "x-access-token"    : localStorage.getItem("token"),
      }
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
    })
  }

  function deleteThisPost(item) {
    // console.log(item);
    fetch(url + '/post/' + item._id, {
      method: 'DELETE',
      headers: {
        "Content-Type"      : "application/json",
        "x-access-token"    : localStorage.getItem("token"),
      }
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
    })
  }

    return(
        <div>
          <button
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Send new post
          </button>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  <label>
                  <span>Title</span>
                  <br />
                  <input
                    type="text"
                    name="title"
                    {...register("title", {
                      minLength: {
                        value: 4,
                        message: "Minimum 4 symbols",
                      },
                      value: title,
                      onChange: (e) => {
                        _title(e);
                      },
                    })}
                  />
                  {errors.username && (
                    <p className="errorMessage">{errors.username.message}</p>
                  )}
                </label>
                <label>
                  <span>Image</span>
                  <br />
                  <input
                    type="url"
                    name="img"
                    {...register("img", {
                      value: img,
                      onChange: (e) => {
                        _img(e);
                      },
                    })}
                  />
                </label>
                <label>
                  <span>Video</span>
                  <br />
                  <input
                    type="url"
                    name="video"
                    {...register("video", {
                      value: video,
                      onChange: (e) => {
                        _video(e);
                      },
                    })}
                  />
                </label>
                <label>
                  <span>Description</span>
                  <br />
                  <input
                    type="text"
                    name="description"
                    {...register("description", {
                      value: description,
                      onChange: (e) => {
                        _description(e);
                      },
                    })}
                  />
                </label>
                <label>
                  <span>Status</span>
                  <br />
                  <input
                    type="text"
                    name="status"
                    {...register("status", {
                      minLength: {
                        value: 3,
                        message: "Minimum 3 symbols",
                      },
                      value: status,
                      onChange: (e) => {
                        _status(e);
                      },
                    })}
                  />
                  {errors.fullName && (
                    <p className="errorMessage">{errors.fullName.message}</p>
                  )}
                </label>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
            <ol className="posts">
                {Array.from(posts).map(item => <li
                  className="post"
                  key={item._id}
                  data-category="CSS JavaScript"
                  
                >
                    <article>
                        <figure>
                            <img src={item.image} alt="" onClick={() => getCurrentPost(item)}/>
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
                    <button className="btn btn-delete" onClick={() => deleteThisPost(item)}>DELETE</button>
                </li>)}
                
            </ol>
        </div>
    );
}