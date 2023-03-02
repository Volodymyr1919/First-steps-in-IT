import TodoListStore from './todo/TodoListViewStore.js';
import TodoListView from './todo/TodoListView.js';
import TodoItemViewStore from './todo/TodoItemViewStore.js';
import TimerView from './timer/TimerView.js';
import timerStore from './timer/TimerViewStore.js';

const todoListStore = new TodoListStore([]);

todoListStore.fetchData();

setInterval(() => {
    timerStore.increase()
}, 1000)

export default function App() {
    return (
        <main>
            <TodoListView todoListState={todoListStore} />
            <hr />
            <TimerView timerState={timerStore}/>
        </main>
    );
};

App.displayName = "App"