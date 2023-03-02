import { makeObservable, observable, action } from 'mobx';

class TodoItemViewStore {
    id = Math.random()
    title = ''
    completed = false

    constructor(data) {
        makeObservable(this, {
            title: observable,
            completed: observable,
            toggle: action,
            rename: action
        })
        this.title = data.title;
        this.completed = data.completed;
        this.id = data.id;
    }

    toggle = () => {
        this.completed = !this.completed
    }

    rename = (title) => {
        this.title = title
    }

}

export default TodoItemViewStore;