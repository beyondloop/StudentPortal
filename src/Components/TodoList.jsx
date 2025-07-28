import React, { useState } from "react";
import { ListTodo } from "lucide-react";

const initialTasks = [
  { id: 1, task: "Submit Math Assignment", completed: false },
  { id: 2, task: "Prepare for Science Quiz", completed: true },
  { id: 3, task: "Upload English Project", completed: false },
  { id: 4, task: "Attend Sports Meeting", completed: false },
];

const TodoList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <ListTodo size={20} /> To-do List
      </h3>
      <ul className="space-y-3">
        {tasks.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b pb-2"
          >
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleTask(item.id)}
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <span
                className={`${
                  item.completed ? "line-through text-gray-400" : "text-gray-800"
                }`}
              >
                {item.task}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
