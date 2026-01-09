const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
// const nodemailer = require('nodemailer');

// POST - Create new lead
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, projectType, message } = req.body;

    // Save to database
    const newLead = new Lead({
      name,
      email,
      phone,
      projectType,
      message
    });

    await newLead.save();

    /*
    // Send email notification (Fail silently if not configured)
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New Lead from Vertical Elevator Landing Page',
        html: `
          <h2>New Lead Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Email sending failed:', emailError.message);
      // Continue without failing the request
    }
    */

    res.status(201).json({ success: true, message: 'Lead submitted successfully' });
  } catch (error) {
    console.error('Lead save failed:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET - Get all leads (for admin)
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;