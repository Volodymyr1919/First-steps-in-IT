import { observer } from 'mobx-react';

const TodoItemView = observer((props) => {
    const {todoItemState, onRemove} = props

    const onRename = (title) => {
        todoItemState.rename(prompt('Изменить название', title));
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={todoItemState.finished}
                onChange={() => todoItemState.toggle()}
            />
            {todoItemState.title}
            <button onClick={() => onRename(todoItemState.title)}>Изменить</button>
            <button onClick={() => onRemove(todoItemState.id)}>Удалить</button>
        </li>
    )
})

export default TodoItemView;