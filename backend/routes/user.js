const express = require('express');

const { getAllUsers, getUser, createUser, deleteUser, updateUser } = require('../controllers/userController');

const router = express.Router();

// GET all workouts8
router.get('/', getAllUsers);

// GET a single workout
router.get('/:id', getUser);

// POST a new workout
router.post('/', createUser);

// DELETE a workout
router.delete('/:id', deleteUser);

// UPDATE a new workout
router.patch('/:d', updateUser);

module.exports = router;
