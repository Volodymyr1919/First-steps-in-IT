import { makeAutoObservable, reaction, when } from "mobx";

class TimerViewStore {

    seconds = 0;
    reverse = 20;

    constructor() {
        makeAutoObservable(this);

        when(
            () => this.seconds === 20,
            () => document.querySelector('.pacman').classList.add('pacman-active')
        );

        const disposer = reaction(
            () => this.reverse,
            (newSecond, oldSecond) => {
                console.log(`From ${oldSecond} to ${newSecond}`);
                if (newSecond === 0) {
                    document.querySelector('.reverse').classList.add('reverse-inactive');
                    disposer();
                }
            }
        );
    }

    reset() {
        this.seconds = 0;
        document.querySelector('.pacman').classList.remove('pacman-active')
    };

    increase() {
        this.seconds ++;
    };

    decrease() {
        this.reverse --;
    }
};

const timerStore = new TimerViewStore();

export default timerStore;