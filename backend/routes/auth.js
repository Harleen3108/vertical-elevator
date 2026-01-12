const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const authMiddleware = require('../middleware/auth');

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login' });
  }
});

// Verify token
router.get('/verify', authMiddleware, async (req, res) => {
  try {
    const admin = await Admin.findById(req.adminId).select('-password');
    res.json({ success: true, admin });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create admin (only for initial setup - you should protect this in production)
router.post('/create-admin', async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ $or: [{ username }, { email }] });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Admin already exists' });
    }

    const admin = new Admin({ username, password, email });
    await admin.save();

    res.status(201).json({ 
      success: true, 
      message: 'Admin created successfully',
      admin: { username: admin.username, email: admin.email }
    });
  } catch (error) {
    console.error('Create admin error:', error);
    res.status(500).json({ message: 'Error creating admin' });
  }
});

module.exports = router;
