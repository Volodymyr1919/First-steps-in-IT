import React from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
// eslint-disable-next-line no-unused-vars
import mainForm from "./mainForm.scss";

export default function MainForm() {

    function changeForm() {
        document.querySelector('.cont').classList.toggle('s--signup');
    };

    return(
        <div>
            <p className="tip">Click on button in image container</p>
            <div className="cont">
                <SignIn />
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h2>New here?</h2>
                            <p>Sign up and discover great amount of new opportunities!</p>
                        </div>
                        <div className="img__text m--in">
                            <h2>One of us?</h2>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                        </div>
                        <div className="img__btn" onClick={changeForm}>
                            <span className="m--up">Sign Up</span>
                            <span className="m--in">Sign In</span>
                        </div>
                    </div>
                    <SignUp />
                </div>
            </div>
        </div>
    );
}