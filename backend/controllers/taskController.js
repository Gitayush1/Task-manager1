import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user.id });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, priority } = req.body;

  const task = await Task.create({
    title,
    description,
    priority,
    userId: req.user.id,
    status: 'incomplete'
  });

  res.status(201).json(task);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) return res.status(404).json({ message: 'Task not found' });
  if (task.userId.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

  await Task.findByIdAndUpdate(id, { status:'complete' });
  
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  if (!task) return res.status(404).json({ message: 'Task not found' });
  if (task.userId.toString() !== req.user.id) return res.status(401).json({ message: 'Unauthorized' });

  await Task.findByIdAndDelete(id);
  res.json({ message: 'Task deleted successfully' });
};
