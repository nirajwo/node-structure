const User = require('../models/user');

// Add user if not exist
const create_user = async (req, res) => {
  try {
    const user = await User.findOne({ user_name: req.body.user_name });
    if (user) throw new Error('User name exists');
    const createUser = await User(req.body).save();
    return res.status(200).json({
      status: 200,
      success: true,
      message: 'User created',
      data: createUser
    });
  } catch (error) {
    return res
      .status(400)
      .json({ status: 400, success: false, message: error.message });
  }
};

// Get list of all users
const get_users = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      status: 200,
      success: true,
      message: 'All users list',
      data: { users }
    });
  } catch (error) {
    return res
      .status(400)
      .json({ status: 400, success: false, message: error.message });
  }
};

// Update user's information
const update_user = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new Error('User not exist');
    const updateUser = await User.findByIdAndUpdate(
      { _id: user._id },
      { $set: req.body }
    );

    return res.status(200).json({
      status: 200,
      success: true,
      message: 'User updated',
      data: updateUser
    });
  } catch (error) {
    return res
      .status(400)
      .json({ status: 400, success: false, message: error.message });
  }
};

// Delete particular user
const delete_user = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ status: 200, success: true, message: 'User deleted' });
  } catch (error) {
    return res
      .status(400)
      .json({ status: 400, success: false, message: error.message });
  }
};

module.exports = {
  get_users,
  create_user,
  update_user,
  delete_user
};
