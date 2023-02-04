import React, { useState } from "react";

function LoginForm() {
  const sendForm = (event) => {
    event.preventDefault();
    console.log("Send form on server", login);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  const calcAge = (e) => {
    let date = new Date().toLocaleDateString();
    let currentDay = new Date().getDate();
    let choosenDay = (e.target.value[8]).toString() + (e.target.value[9]).toString();
    let currentMonth = (date[3]).toString() + (date[4]).toString();
    let choosenMonth = (e.target.value[5]).toString() + (e.target.value[6]).toString()
    let currentYear = new Date().getFullYear();
    let choosenYear = (e.target.value[0]).toString() + (e.target.value[1]).toString() + (e.target.value[2]).toString() + (e.target.value[3]).toString();
    let finYear = choosenYear * 1;
    let resultYear = currentYear - finYear;
    if ((currentMonth * 1) < (choosenMonth * 1)) {
        console.log(resultYear - 1);
        document.getElementById('age').innerHTML = resultYear - 1;
    } 
    else if ((currentMonth * 1) > (choosenMonth * 1)) {
        console.log(resultYear);
        document.getElementById('age').innerHTML = resultYear;
    } else {
        if (currentDay < (choosenDay * 1)) {
            console.log(resultYear - 1);
            document.getElementById('age').innerHTML = resultYear - 1;
        } else {
            console.log(resultYear);
            document.getElementById('age').innerHTML = resultYear;
        }
    }
    setLogin(e.target.value);
  }

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <form onSubmit={sendForm}>
      <label>
        Log In:
        <input
          value={login}
          onChange={calcAge}
          name="login"
          type="date"
        />
      </label>
      <label>
        Password:
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          name="password"
          type="password"
        />
      </label>
      <label>
        <input
            type="checkbox"
            checked={checked}
            onChange={handleChange}
        />
        Remember me
      </label>
      <button>Submit</button>
      <span id="age"></span>
    </form>
  );
}

export default LoginForm;
