import React from "react";
import TimerView from "./timer/TimerView";
import timerStore from "./timer/TimerViewStore";

setInterval(() => {
  timerStore.increase();
}, 1000)

function App() {
  return (
    <div className="App">
      <TimerView timerState={timerStore}/>
    </div>
  );
}

export default App;
