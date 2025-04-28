import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Task from './models/Task.js';
import bcrypt from 'bcrypt';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    await User.deleteMany();
    await Task.deleteMany();

    const password = await bcrypt.hash('password123', 10);

    const users = await User.insertMany([
      { name: 'Alice', email: 'alice@example.com', password },
      { name: 'Bob', email: 'bob@example.com', password },
    ]);

    await Task.insertMany([
      {
        title: 'Buy groceries',
        description: 'Milk, Eggs, Bread',
        status: 'incomplete',
        priority: 'Medium',
        userId: users[0]._id,
      },
      {
        title: 'Workout',
        description: 'Gym session',
        status: 'incomplete',
        priority: 'High',
        userId: users[0]._id,
      },
      {
        title: 'Call mom',
        description: 'Weekly catch-up',
        status: 'complete',
        priority: 'Low',
        userId: users[1]._id,
      },
    ]);

    console.log('Data seeded!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

connectDB().then(importData);
