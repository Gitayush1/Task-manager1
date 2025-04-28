import express from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/taskController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Protect all task routes
router.use(protect);

router.get('/', getTasks);
router.post('/', createTask);
router.post('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
