import React, { useState } from "react";

function AgeCalc() {

  const calcAge = (e) => {
    let date = new Date().toLocaleDateString();
    let currentDay = new Date().getDate();
    let choosenDay = (e.target.value[8]).toString() + (e.target.value[9]).toString();
    let currentMonth = (date[3]).toString() + (date[4]).toString();
    let choosenMonth = (e.target.value[5]).toString() + (e.target.value[6]).toString();
    let currentYear = new Date().getFullYear();
    let choosenYear = (e.target.value[0]).toString() + (e.target.value[1]).toString() + (e.target.value[2]).toString() + (e.target.value[3]).toString();
    let finYear = choosenYear * 1;
    let resultYear = currentYear - finYear;
    if ((currentMonth * 1) < (choosenMonth * 1)) {
        document.getElementById('age').innerHTML = resultYear - 1;
    } 
    else if ((currentMonth * 1) > (choosenMonth * 1)) {
        document.getElementById('age').innerHTML = resultYear;
    } else {
        if (currentDay < (choosenDay * 1)) {
            document.getElementById('age').innerHTML = resultYear - 1;
        } else {
            document.getElementById('age').innerHTML = resultYear;
        }
    }
    setAge(e.target.value);
  }

  const [age, setAge] = useState("");

  return (
    <div className="card">
        <header>
            <div className="title" href="#">Date of birth:
            <input
            className="setDate"
            value={age}
            onChange={calcAge}
            name="login"
            type="date"
            />
            </div>
        </header>
        <div className="content">Age is:
        <span id="age"></span>
        </div>
    </div>
    // <form onSubmit={sendForm}>
    //   <label>
    //     Set date of birth:
    //     <input
    //       value={age}
    //       onChange={calcAge}
    //       name="login"
    //       type="date"
    //     />
    //   </label>
    //   <span>
    //     Age is:
    //     <span id="age"></span>
    //   </span>
    // </form>
  );
}

export default AgeCalc;
