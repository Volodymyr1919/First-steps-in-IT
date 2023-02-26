import React, { useState, useMemo, useCallback } from 'react';

function TaskScheduler(props) {

    const [tasks, setTasks] = useState(props.todo);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // memoized filtered tasks based on selected category
  const filteredTasks = useMemo(() => {
    if (selectedCategory === 'all') {
      return tasks;
    } else {
      return tasks.filter((task) => task.category === selectedCategory);
    }
  }, [tasks, selectedCategory]);

  // memoized function to delete a task
  const deleteTask = useCallback((taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }, [tasks]);

  // memoized function to handle category change
  const handleCategoryChange = useCallback((event) => {
    setSelectedCategory(event.target.value);
  }, []);

  return (
    <div>
      <h2>Task Scheduler</h2>
      <label>
        Filter by category:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
        </select>
      </label>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskScheduler;
