import { makeObservable, observable, action, computed } from "mobx";
import InventoryItemViewStore from "./InventoryItemViewStore";

class InventoryListViewStore {
    items = [];

    constructor(items) {
        makeObservable(this, {
            items: observable,
            unfinishedCount: computed,
            append: action,
            remove: action
        })
        this.items = items;
    }

    get unfinishedCount() {
        return this.items.filter(item => !item.finished).length;
    }

    append = (title) => {
        this.items.push(new InventoryItemViewStore(title));
    }

    remove = (id) => {
        if (window.confirm("Are you sure?") === true) {
            this.items = this.items.filter(item => item.id !== id);
        } else {
            return;   
        }
    }

};

export default InventoryListViewStore;