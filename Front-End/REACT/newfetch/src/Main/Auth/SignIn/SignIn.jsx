import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignIn(){
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onChange" });
    
      const onSubmit = (data) => {
        console.log("User credentials", data);
        // POST request using fetch with error handling
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: data.userName, password: data.password })
        };
        fetch('http://65.109.13.139:9191/signin', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                console.log(data);
                // localStorage.setItem("token", data.token);
                localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc2N2I3ZjYyZGUxNzg0YmU2M2E0MTAiLCJpYXQiOjE2NzY1NTMwOTQsImV4cCI6MTY3NjU2MDI5NH0.E8__ay6xixnV4uQCLFpHdVQXvZauANQJb_rXog-mZO4");
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
      };
    
      const [password, setPassword] = useState("");
      const [userName, setUserName] = useState("");
    
      function _password(e) {
        setPassword(e.target.value);
      }
      function _userName(e) {
        setUserName(e.target.value);
      }
    
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
           <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
            <input
            type="text"
            name="userName"
            className="form-control"
            {...register("userName", {
              required: "User Name is required",
              minLength: { value: 4, message: "User name is min 4 symbols" },
              value: userName,
              onChange: (e) => {
                _userName(e);
              },
            })}
            />{" "}
            {errors.userName && <p>{errors.userName.message}</p>}
           </div>
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password will be min 6 symbols" },
              value: password,
              onChange: (e) => {
                _password(e);
              },
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <button className="btn">Sign In</button>
        </form>
      );
}