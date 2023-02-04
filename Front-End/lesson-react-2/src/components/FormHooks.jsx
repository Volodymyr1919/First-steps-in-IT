import React, { useState } from "react";

export default function HoverDiv() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const sendForm = (e) => {
        e.preventDefault();
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if(re.test(String(email).toLowerCase()) && password.length > 6 && password === confPassword) {
            console.log("That is E-Mail: ", email, "That is Password: ", password, "That is Confirm Password: ", confPassword);
        } else {
            console.log("Error");
        };
    };

    const checkPassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    const checkConfPassword = (e) => {
        e.preventDefault();
        setConfPassword(e.target.value);
    };

    const checkEm = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    return(
        <form>
            <label>
                E-mail <br />
                <input
                    value={email}
                    type="email"
                    placeholder="example@domain.com"
                    name="email"
                    onChange={checkEm}
                    required
                />
            </label>

            <br /><br />

            <select name="" id="">
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
                <option value="fourth">Fourth</option>
                <option value="fifth">Fifth</option>
            </select>

            <br /><br />

            <label>
                Password <br />
                <input
                    value={password}
                    name="password"
                    onChange={checkPassword}
                    type="password"
                    required
                />
            </label>

            <br /><br />

            <label>
                Confirm Password <br />
                <input
                    value={confPassword}
                    name="confPassword"
                    onChange={checkConfPassword}
                    type="password"
                    required
                />
            </label>

            <br /><br />

            <button type="submit" onClick={sendForm}>Submit</button>
        </form>
    );
};