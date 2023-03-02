import { makeObservable, observable, action, computed, runInAction } from 'mobx';
import axios from 'axios';
import TodoItemStore from './TodoItemViewStore.js';

class TodoListStore {
    todos = []

    constructor(todos) {
        makeObservable(this, {
            todos: observable,
            unfinishedCount: computed,
            append: action,
            remove: action,
            fetchData: action
        })
        this.todos = todos
    }

    get unfinishedCount() {
        return this.todos.filter(todo => !todo.completed).length
    }

    append = (title) => {
        this.todos.push(new TodoItemStore({title: title, id: 555}))
    }

    remove = (id) => {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
        .then(res => {
            runInAction(() => {
                console.log(res.data);
                res.data.map(item => {
                    this.todos.push(new TodoItemStore(item))
                })
            })
        })
    }
};

export default TodoListStore;