const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const nodemailer = require('nodemailer');

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Test email endpoint
router.get('/test-email', async (req, res) => {
  try {
    const transporter = createTransporter();
    
    // Verify connection
    await transporter.verify();
    console.log('✓ Email server connection verified');
    
    // Send test email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Test Email from Vertical Elevators',
      html: '<h2>Test Email</h2><p>If you receive this, email is working!</p>'
    });
    
    console.log('✓ Test email sent:', info.messageId);
    res.json({ success: true, message: 'Test email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('✗ Email test failed:', error);
    res.status(500).json({ success: false, error: error.message, code: error.code });
  }
});

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
    console.log('✓ Lead saved to database:', newLead._id);

    // Send response immediately - don't wait for email
    res.status(201).json({ success: true, message: 'Lead submitted successfully' });

    // Send email in background
    setImmediate(async () => {
      try {
        const transporter = createTransporter();
        
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: '🔔 New Lead from Vertical Elevators Website',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #1e40af;">New Lead Received</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="background-color: #f3f4f6;">
                  <td style="padding: 10px; border: 1px solid #ddd;"><strong>Name:</strong></td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                </tr>
                <tr style="background-color: #f3f4f6;">
                  <td style="padding: 10px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;"><strong>Project Type:</strong></td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${projectType}</td>
                </tr>
                <tr style="background-color: #f3f4f6;">
                  <td style="padding: 10px; border: 1px solid #ddd;"><strong>Message:</strong></td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${message || 'No message provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd;"><strong>Submitted:</strong></td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
                </tr>
              </table>
            </div>
          `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✓ Email sent successfully:', info.messageId);
      } catch (emailError) {
        console.error('✗ Email sending failed:', emailError.message);
        console.error('Error code:', emailError.code);
      }
    });
  } catch (error) {
    console.error('✗ Lead save failed:', error);
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
      setImmediate(async () => {
        try {
          const transporter = nodemailer.createTransporter({
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
          console.log('✓ Status update email sent');
        } catch (emailError) {
          console.error('✗ Status update email failed:', emailError.message);
        }
      });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;