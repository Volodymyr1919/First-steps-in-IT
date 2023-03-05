import { makeAutoObservable, reaction, when } from "mobx";

class TimerViewStore {

    seconds = 0;

    constructor() {
        makeAutoObservable(this);

        when(
            () => this.seconds === 30,
            () => console.log("half minute passed")
        );

        const disposer = reaction(
            () => this.seconds,
            (newSecond, oldSecond) => {
                console.log(`From ${oldSecond} to ${newSecond}`);
                if (newSecond === 15) {
                    disposer();
                }
            }
        );
    }

    reset() {
        this.seconds = 0;
    };

    increase() {
        this.seconds ++;
    }
};

const timerStore = new TimerViewStore();

export default timerStore;