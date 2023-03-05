// eslint-disable-next-line no-unused-vars
import { autorun, makeAutoObservable, reaction, spy, when } from "mobx";

class TimerViewStore {

    seconds = 0;

    // Вместо makeObservable можно использовать makeAutoObservable.
    // В этом случае все собственные свойства будет отмечены как observable.
    // Свойства, у которых есть геттер get — будут отмечены как computed.
    // Свойства, у которых есть сеттер set — будут отмечены как action.

    constructor() {
        makeAutoObservable(this);

        // autorun(() => {
        //     console.log("Timer in console:", this.seconds);
        // });

        // when(
        //     () => this.seconds === 60, 
        //     () => console.log("1 minute passed")
        // );

        // // reaction(
        // //     () => this.seconds,
        // //     (newSecond, oldSecond) => {
        // //         console.log(`Go from ${oldSecond} to ${newSecond}`);
        // //     }
        // // );
        // const disposer = reaction(
        //     () => this.seconds,
        //     (newSec, oldSec) => {
                // console.log("Waiting 30 seconds");
        //         if (newSec === 30) {
        //             //unmount THIS reaction
        //             disposer();
        //         }
        //     }
        // );

        // spy((spyEvent) => {
        //     if (spyEvent.type === "action") {
        //         console.log("spy event", spyEvent);
        //     }
        // });
    }

    reset() {
        this.seconds = 0;
    }

    increase() {
        this.seconds ++;
    }
};

const timerStore = new TimerViewStore();

export default timerStore;

timerStore.displayName = "Timer";