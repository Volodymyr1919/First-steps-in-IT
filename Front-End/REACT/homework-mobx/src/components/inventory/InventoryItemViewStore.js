import { makeObservable, observable, action } from "mobx";

class InventoryItemViewStore {
    id = Math.random();
    title = '';
    category = '';
    finished = false;

    constructor(title, category) {
        makeObservable(this, {
            title: observable,
            category: observable,
            finished: observable,
            toggle: action,
            rename: action
        })
        this.title = title;
        this.category = category;
    };

    toggle = () => {
        this.finished = !this.finished;
    };

    rename = (title, category) => {
        this.title = title;
        this.category = category;
    };
};

export default InventoryItemViewStore;