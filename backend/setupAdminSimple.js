const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

async function setupAdmin() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✓ Connected to MongoDB');

    const Admin = mongoose.model('Admin', new mongoose.Schema({
      username: String,
      password: String,
      email: String,
      createdAt: { type: Date, default: Date.now }
    }));

    // Admin credentials
    const username = 'admin';
    const email = 'harleenk7209@gmail.com';
    const password = 'Admin@123';

    // Check if admin exists
    const existing = await Admin.findOne({ $or: [{ username }, { email }] });

    if (existing) {
      console.log('\n✓ Admin already exists!');
      console.log('\n=== Login Credentials ===');
      console.log('Username: admin');
      console.log('Password: Admin@123');
      console.log('URL: http://localhost:5173/admin/login');
    } else {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create admin
      await Admin.create({
        username,
        email,
        password: hashedPassword
      });

      console.log('\n✓ Admin created successfully!');
      console.log('\n=== Login Credentials ===');
      console.log('Username: admin');
      console.log('Password: Admin@123');
      console.log('Email: harleenk7209@gmail.com');
      console.log('\nLogin URL: http://localhost:5173/admin/login');
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('\n✗ Error:', error.message);
    process.exit(1);
  }
}

setupAdmin();
