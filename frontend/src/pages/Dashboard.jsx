import React, { useEffect, useState } from 'react';
import API from '../api/api.js';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const fetchTasks = async () => {
    const res = await API.get('/tasks');
    setTasks(res.data);
  };

  const handleAddTask = async (task) => {
    await API.post('/tasks', task);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const handleToggleComplete = async (id) => {
    await API.post(`/tasks/${id}`);
    fetchTasks();
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.status === 'complete';
    if (filter === 'active') return task.status === 'incomplete';
    return true;
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => setFilter('all')} className="bg-gray-300 cursor-pointer p-2 rounded">All</button>
          <button onClick={() => setFilter('active')} className="bg-yellow-300 cursor-pointer p-2 rounded">Active</button>
          <button onClick={() => setFilter('completed')} className="bg-green-300 cursor-pointer p-2 rounded">Completed</button>
        </div>
        <TaskList
          tasks={filteredTasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleComplete}
          onAdd={handleAddTask}
        />
      </div>
    </>
  );
};

export default Dashboard;
