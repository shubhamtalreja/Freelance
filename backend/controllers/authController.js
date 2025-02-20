const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {

    try {
        const { name, email, password, role, service } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        // for creating new user
        const user = new User({ name, email, password: hashPassword, role, service })
        await user.save();

        res.status(200).json({ message: "User created successfully" })
    } catch (e) {
        res.status(400).json({ message: e.message })
    }

}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.json({ token, userId: user._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
