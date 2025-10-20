const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
let User = require('../models/user.model');

// @route   POST api/users/register
router.route('/register').post(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // ... validation code ...
    if (!username || !email || !password) { return res.status(400).json({ msg: 'Please enter all fields.' }); }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) { return res.status(400).json({ msg: 'An account with this email already exists.' }); }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: passwordHash });
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: savedUser._id,
        username: savedUser.username,
        isAdmin: savedUser.isAdmin, // <-- ADD THIS LINE
      },
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error: ' + err.message });
  }
});

// @route   POST api/users/login
router.route('/login').post(async (req, res) => {
  try {
    const { email, password } = req.body;
    // ... validation code ...
    if (!email || !password) { return res.status(400).json({ msg: 'Please enter all fields.' }); }
    const user = await User.findOne({ email: email });
    if (!user) { return res.status(400).json({ msg: 'Invalid credentials.' }); }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { return res.status(400).json({ msg: 'Invalid credentials.' }); }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        isAdmin: user.isAdmin, // <-- ADD THIS LINE
      },
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server Error: ' + err.message });
  }
});

module.exports = router;