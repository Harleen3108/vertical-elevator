const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const nodemailer = require('nodemailer');

// POST - Create new lead
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, projectType, message } = req.body;

    // Check if email or phone already exists
    const existingLead = await Lead.findOne({
      $or: [
        { email: email },
        { phone: phone }
      ]
    });

    if (existingLead) {
      return res.status(400).json({ 
        success: false, 
        message: 'You have already submitted a request with this email or phone number. We will contact you soon!' 
      });
    }

    // Save to database
    const newLead = new Lead({
      name,
      email,
      phone,
      projectType,
      message
    });

    await newLead.save();

    // Send response immediately - don't wait for email
    res.status(201).json({ success: true, message: 'Lead submitted successfully' });

    // Send email in background without blocking (fire and forget)
    process.nextTick(async () => {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          },
          timeout: 5000 // 5 second timeout for email
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
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError.message);
        // Fail silently - don't affect the user experience
      }
    });
  } catch (error) {
    console.error('Lead save failed:', error);
    if (!res.headersSent) {
      res.status(500).json({ success: false, message: error.message });
    }
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

// PATCH - Update lead status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const lead = await Lead.findByIdAndUpdate(
      req.params.id, 
      { status }, 
      { new: true }
    );

    // Send email notification if status is changed to 'Contacted'
    if (status === 'Contacted' && lead) {
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
          subject: 'Lead Status Updated: Contacted',
          html: `
            <h2>Lead Marked as Contacted</h2>
            <p>The following lead has been successfully contacted:</p>
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Phone:</strong> ${lead.phone}</p>
            <p><strong>Project Type:</strong> ${lead.projectType}</p>
            <p><strong>Status:</strong> <span style="color: green; font-weight: bold;">Contacted</span></p>
          `
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Status update email failed:', emailError.message);
        // Continue silently
      }
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;