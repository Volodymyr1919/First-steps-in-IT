import React, { useState, useMemo, useCallback } from 'react';

function TodoList(props) {
  const [todos, setTodos] = useState(props.todo);

  // memoized function to delete a task
  const deleteTask = useCallback((index) => {
    const newTodos = [...todos];
    if (window.confirm("Sure?") === true) {
      newTodos.splice(index, 1);
      setTodos(newTodos);
    } else {
      return;
    }
  }, [todos]);

  // memoized array of completed tasks
  const completedTasks = useMemo(() => {
    return todos.filter((todo) => todo.completed);
  }, [todos]);

  return (
    <div>
      <h2>To-Do List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                const newTodos = [...todos];
                newTodos[index].completed = !newTodos[index].completed;
                setTodos(newTodos);
              }}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Completed tasks: {completedTasks.length}</p>
    </div>
  );
}

export default TodoList;
