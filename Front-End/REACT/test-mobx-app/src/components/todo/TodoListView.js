import { observer } from "mobx-react";
import TodoItemView from "./TodoItemView";

const TodoListView = observer(({ todoListState }) => {
    const onAppend = () => {
        todoListState.append(prompt('Новая задача', 'Новая задача'));
    }

    return (
        <div>
            <ul>
                {todoListState.todos.map(todo => (
                    <TodoItemView
                        key={todo.id}
                        todoItemState={todo}
                        onRemove={todoListState.remove}
                    />
                ))}
            </ul>
            <p>Осталось задач: {todoListState.unfinishedCount}</p>
            <button onClick={onAppend}>Добавить задачу</button>
        </div>
    )
})

export default TodoListView;