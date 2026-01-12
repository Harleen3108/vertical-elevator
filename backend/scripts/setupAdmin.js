const mongoose = require('mongoose');
require('dotenv').config();
const Admin = require('../models/Admin');

async function setupAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✓ Connected to MongoDB');

    // Admin credentials
    const adminData = {
      username: 'admin',
      email: 'harleenk7209@gmail.com',
      password: 'Admin@123'
    };

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ 
      $or: [{ username: adminData.username }, { email: adminData.email }] 
    });

    if (existingAdmin) {
      console.log('\n✓ Admin already exists!');
      console.log('Username:', existingAdmin.username);
      console.log('Email:', existingAdmin.email);
      console.log('\nUse these credentials to login:');
      console.log('Username: admin');
      console.log('Password: Admin@123');
    } else {
      // Create admin
      const admin = new Admin(adminData);
      await admin.save();

      console.log('\n✓ Admin created successfully!');
      console.log('\n=== Admin Credentials ===');
      console.log('Username: admin');
      console.log('Email: harleenk7209@gmail.com');
      console.log('Password: Admin@123');
      console.log('\nYou can now login at /admin/login');
    }

    process.exit(0);
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    process.exit(1);
  }
}

setupAdmin();
