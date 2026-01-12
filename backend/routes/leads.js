const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const sgMail = require('@sendgrid/mail');
const authMiddleware = require('../middleware/auth');

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Test email endpoint
router.get('/test-email', async (req, res) => {
  try {
    const msg = {
      to: process.env.ADMIN_EMAIL,
      from: {
        email: process.env.SENDGRID_FROM_EMAIL,
        name: process.env.SENDGRID_FROM_NAME
      },
      subject: 'Test Email from Vertical Elevators',
      html: '<h2>Test Email</h2><p>If you receive this, SendGrid email is working!</p>'
    };
    
    const response = await sgMail.send(msg);
    console.log('✓ Test email sent via SendGrid');
    res.json({ success: true, message: 'Test email sent successfully via SendGrid' });
  } catch (error) {
    console.error('✗ SendGrid email test failed:', error.response?.body || error);
    res.status(500).json({ 
      success: false, 
      error: error.message, 
      details: error.response?.body 
    });
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
    console.log('📧 New lead details:', { name, email, phone, projectType });

    // Send email notification to admin using SendGrid
    setImmediate(async () => {
      try {
        const msg = {
          to: process.env.ADMIN_EMAIL,
          from: {
            email: process.env.SENDGRID_FROM_EMAIL,
            name: process.env.SENDGRID_FROM_NAME
          },
          subject: `New Lead: ${name} - ${projectType}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2563eb;">New Lead Submission</h2>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Project Type:</strong> ${projectType}</p>
                <p><strong>Message:</strong></p>
                <p style="background-color: white; padding: 15px; border-radius: 4px;">${message || 'No message provided'}</p>
              </div>
              <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
                This lead was submitted on ${new Date().toLocaleString()}
              </p>
            </div>
          `
        };
        
        await sgMail.send(msg);
        console.log('✓ Lead notification email sent via SendGrid');
      } catch (emailError) {
        console.error('✗ SendGrid email failed:', emailError.response?.body || emailError.message);
      }
    });

    // Send response
    res.status(201).json({ 
      success: true, 
      message: 'Lead submitted successfully'
    });

  } catch (error) {
    console.error('✗ Lead save failed:', error);
    if (!res.headersSent) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
});

// GET - Get all leads (for admin) - Protected route
router.get('/', authMiddleware, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PATCH - Update lead status - Protected route
router.patch('/:id/status', authMiddleware, async (req, res) => {
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
          const msg = {
            to: process.env.ADMIN_EMAIL,
            from: {
              email: process.env.SENDGRID_FROM_EMAIL,
              name: process.env.SENDGRID_FROM_NAME
            },
            subject: 'Lead Status Updated: Contacted',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #16a34a;">Lead Marked as Contacted</h2>
                <p>The following lead has been successfully contacted:</p>
                <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #16a34a;">
                  <p><strong>Name:</strong> ${lead.name}</p>
                  <p><strong>Email:</strong> ${lead.email}</p>
                  <p><strong>Phone:</strong> ${lead.phone}</p>
                  <p><strong>Project Type:</strong> ${lead.projectType}</p>
                  <p><strong>Status:</strong> <span style="color: #16a34a; font-weight: bold;">Contacted</span></p>
                </div>
              </div>
            `
          };

          await sgMail.send(msg);
          console.log('✓ Status update email sent via SendGrid');
        } catch (emailError) {
          console.error('✗ SendGrid status email failed:', emailError.response?.body || emailError.message);
        }
      });
    }
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;