import React, { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggle, onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAdd({ title, description, priority });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-2 mb-2 border rounded"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button type="submit" className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded">
          Add Task
        </button>
      </form>

      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TaskList;
