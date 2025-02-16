const User = require('../models/User');

exports.getUsersByService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const users = await User.find({ services: serviceId }).select('-password');
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).select('-password').populate('services');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
