import React from "react";
// eslint-disable-next-line no-unused-vars
import login from "./login.scss";

export default function Signup() {
    return(
        <div className="main-login">
            <div className="login-box">
                <h2>Signup</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Username/E-Mail</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="" />
                        <label>Confirm Password</label>
                    </div>
                    <a href="/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                    </a>
                </form>
            </div>
        </div>
    );
};