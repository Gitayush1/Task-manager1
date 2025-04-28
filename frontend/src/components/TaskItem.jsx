import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className="bg-white p-4 mb-2 rounded shadow flex justify-between items-center">
      <div>
        <h3 className={'text-lg font-semibold'}>
          {task.title} ({task.priority})
        </h3>
        <p className="text-gray-600">{task.description}</p>
      </div>
      <div className="space-x-2">
        {task.status === 'complete' ? 'Completed ' : <button onClick={() => onToggle(task._id)} className="bg-green-400 cursor-pointer px-2 py-1 rounded text-white">
          {task.status === 'complete' ? 'Undo' : 'Complete'}
        </button>}
        {task ? <button onClick={() => onDelete(task._id)} className="bg-red-500 px-2 cursor-pointer py-1 rounded text-white">
          Delete
        </button> : '' }
      </div>
    </div>
  );
};

export default TaskItem;
