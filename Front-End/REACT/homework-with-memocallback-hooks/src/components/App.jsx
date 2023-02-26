import React from "react";
// import TaskList from "./TaskList";
import TodoList from "./TaskList";
import TaskScheduler from "./NewTaskList";

function App() {
  const todo = [
            { id: 1, text: "Learn React", category: "personal" },
            { id: 2, text: "Build a project", category: "work" },
            { id: 3, text: "Deploy to production", category: "work" }
        ]

  return (
    <div className="App">
      {/* <TaskList /> */}
      <TodoList todo={todo}/>
      <TaskScheduler todo={todo}/>
    </div>
  );
}

export default App;