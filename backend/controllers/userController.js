const User = require('../models/userModel');
const mongoose = require('mongoose');

// GET all users
const getAllUsers = async (req, res) => {
	const user = await User.find({}).sort({ createdAt: -1 });

	res.status(200).json(user);
};

// GET a single user
const getUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such user' });
	}
	const user = await User.findById(id);

	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}

	res.status(200).json(user);
};
// CREATE a new user
const createUser = async (req, res) => {
	const { name, lastName, age } = req.body;

	//add doc to DB
	try {
		const user = await User.create({ name, lastName, age });
		res.status(200).json(user);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
// DELETE a single user
const deleteUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such user' });
	}

	const user = await User.findOneAndDelete({ _id: id });

	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}

	res.status(200).json(user);
};

// UPDATE a single user
const updateUser = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'No such user' });
	}
	const user = await User.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);
	if (!user) {
		return res.status(404).json({ error: 'User not found' });
	}

	res.status(200).json(user);
};

module.exports = {
	getAllUsers,
	getUser,
	createUser,
	deleteUser,
	updateUser,
};
