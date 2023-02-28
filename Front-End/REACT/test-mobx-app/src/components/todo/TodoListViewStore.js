import { makeObservable, observable, action, computed } from 'mobx';
import TodoItemStore from './TodoItemViewStore.js';

class TodoListStore {
    todos = []

    constructor(todos) {
        makeObservable(this, {
            todos: observable,
            unfinishedCount: computed,
            append: action,
            remove: action,
        })
        this.todos = todos
    }

    get unfinishedCount() {
        return this.todos.filter(todo => !todo.finished).length
    }

    append = (title) => {
        this.todos.push(new TodoItemStore(title))
    }

    remove = (id) => {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
};

export default TodoListStore;