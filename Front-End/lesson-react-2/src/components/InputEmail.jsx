import React, { useState, useContext } from "react";

export default function InputEmail() {

    let EmailRegexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    const EmailContext = React.createContext({
        message: "Incorrect E-Mail"
      });

    const {errorMessage} = useContext(EmailContext);
    const [email, setEmail] = useState(errorMessage);
    const [newErrorMessage, setNewErrorMessage] = useState(errorMessage);

    function validateEmail() {
        if(EmailRegexp.test(String(email).toLowerCase())) {
            alert("E-Mail is correct");
        } else {
            setNewErrorMessage("Totaly incorrect shit");
        }
    }

    return(
        <div>
            <input
                type="email"
                placeholder="Enter your E-Mail"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
            />
            <button onClick={() => {validateEmail()}}>Validate</button>
        </div>
    );
}