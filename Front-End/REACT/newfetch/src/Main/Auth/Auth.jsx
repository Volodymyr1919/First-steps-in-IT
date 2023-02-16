import React from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

export default function Auth(){
    return(
        <div>
            <SignIn />
            <hr />
            <SignUp />
        </div>
    );
}