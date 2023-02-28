import TodoListStore from './todo/TodoListViewStore.js'
import TodoListView from './todo/TodoListView.js'
import TodoItemViewStore from './todo/TodoItemViewStore.js'

const todoListStore = new TodoListStore([
    new TodoItemViewStore('Первая задача'),
    new TodoItemViewStore('Вторая задача'),
    new TodoItemViewStore('Третья задача'),
])

export default function App() {
    return <TodoListView todoListState={todoListStore} />
}