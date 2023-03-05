import React from "react";
import TimerView from "./timer/TimerView";
import timerStore from "./timer/TimerViewStore";
// eslint-disable-next-line no-unused-vars
import appStyle from "./app.scss";

setInterval(() => {
  timerStore.increase();
  timerStore.decrease();
}, 1000);

function App() {
  return (
    <div className="App">
      <TimerView timerState={timerStore}/>
    </div>
  );
}

export default App;
