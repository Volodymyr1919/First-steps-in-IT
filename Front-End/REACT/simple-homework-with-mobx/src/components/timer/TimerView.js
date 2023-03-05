import { observer } from "mobx-react";

const TimerView = observer((props) => {
    const { timerState } = props;

    return(
        <>
            <h2>
                Seconds: {timerState.seconds}
            </h2>
            <button onClick={() => timerState.reset()}>Reset timer</button>
        </>
    );
});

export default TimerView;