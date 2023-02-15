import React, { useState, useEffect }   from "react";
import { useForm }                      from "react-hook-form";
// eslint-disable-next-line no-unused-vars
// import user                             from "./user.scss";

export default function User() {
  let url = "http://65.109.13.139:9191";

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type"    : "application/json",
      "x-access-token"  : localStorage.getItem("token"),
    },
  };

  const [fullName, setFullName]         = useState("");
  const [userName, setUserName]         = useState("");
  const [avatar, setAvatar]             = useState("");
  const [age, setAge]                   = useState("");
  const [bio, setBio]                   = useState("");
  const [posts_count, setPostsCount]    = useState("");
  const [followers, setFollowers]       = useState("");
  const [followings, setFollowings]     = useState("");

  useEffect(() => {
    function setMe() {
      fetch(url + "/me", requestOptions)
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());
          setFullName(data.fullName);
          setUserName(data.username);
          setAvatar(data.avatar);
          setAge(data.age);
          setBio(data.bio);
          setPostsCount(data.posts_count);
          setFollowers(data.followers);
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

  function _Hover() {
    document.querySelector(".cardes__flip").classList.toggle("hover");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("User credentials", data);
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type"      : "application/json",
        "x-access-token"    : localStorage.getItem("token"),
      },
      body: JSON.stringify({
        username    : data.username,
        avatar      : data.avatar,
        age         : data.age,
        bio         : data.bio,
        fullName    : data.fullName,
      }),
    };
    fetch(url + "/me", requestOptions)
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

  function _userName(e) {
    setUserName(e.target.value);
  }

  function _userAvatar(e) {
    setAvatar(e.target.value);
  }

  function _userAge(e) {
    setAge(e.target.value);
  }

  function _userBio(e) {
    setBio(e.target.value);
  }

  function _userFullName(e) {
    setFullName(e.target.value);
  }

  return (
    <div>
      <button
        className="btn btn__primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Change self data
      </button>
      <div className="cardes__flip" onTouchStart={_Hover}>
        <div className="cardes__container">
          <div className="cardes cardes--front">
            <img src={avatar} alt="" />
            <h1>{userName}</h1>
            <h2>Front-end &amp; Fun</h2>
            <p>{bio}</p>
            <div className="flip">
              <span>{fullName}</span>
            </div>
          </div>
          <div className="cardes cardes--back">
            <dl>
              <dt>Age</dt>
              <dd>{age}</dd>
              <dt>Posts</dt>
              <dd>{posts_count}</dd>
              <dt>Followers</dt>
              <dd>{followers}</dd>
              <dt>Followings</dt>
              <dd>{followings}</dd>
            </dl>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update your data
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal-body">
                <label>
                  <span>User name</span>
                  <br />
                  <input
                    type="name"
                    name="username"
                    {...register("username", {
                      minLength: {
                        value: 4,
                        message: "Minimum 4 symbols",
                      },
                      value: userName,
                      onChange: (e) => {
                        _userName(e);
                      },
                    })}
                  />
                  {errors.username && (
                    <p className="errorMessage">{errors.username.message}</p>
                  )}
                </label>
                <label>
                  <span>Avatar</span>
                  <br />
                  <input
                    type="url"
                    name="avatar"
                    {...register("avatar", {
                      value: avatar,
                      onChange: (e) => {
                        _userAvatar(e);
                      },
                    })}
                  />
                </label>
                <label>
                  <span>Age</span>
                  <br />
                  <input
                    type="number"
                    name="age"
                    {...register("age", {
                      value: age,
                      onChange: (e) => {
                        _userAge(e);
                      },
                    })}
                  />
                </label>
                <label>
                  <span>Biography</span>
                  <br />
                  <input
                    type="text"
                    name="bio"
                    {...register("bio", {
                      value: bio,
                      onChange: (e) => {
                        _userBio(e);
                      },
                    })}
                  />
                </label>
                <label>
                  <span>User name</span>
                  <br />
                  <input
                    type="name"
                    name="fullName"
                    {...register("fullName", {
                      minLength: {
                        value: 3,
                        message: "Minimum 3 symbols",
                      },
                      value: fullName,
                      onChange: (e) => {
                        _userFullName(e);
                      },
                    })}
                  />
                  {errors.fullName && (
                    <p className="errorMessage">{errors.fullName.message}</p>
                  )}
                </label>
              </div>
              <div className="modal-footer">
                <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
