const mongoose = require('mongoose');
const readline = require('readline');
require('dotenv').config();

const Admin = require('../models/Admin');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✓ Connected to MongoDB');

    console.log('\n=== Create Admin User ===\n');

    const username = await question('Enter username: ');
    const email = await question('Enter email: ');
    const password = await question('Enter password: ');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ $or: [{ username }, { email }] });
    if (existingAdmin) {
      console.log('\n✗ Admin with this username or email already exists!');
      process.exit(1);
    }

    // Create admin
    const admin = new Admin({ username, email, password });
    await admin.save();

    console.log('\n✓ Admin created successfully!');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log('\nYou can now login at /admin/login');

    process.exit(0);
  } catch (error) {
    console.error('\n✗ Error creating admin:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

createAdmin();
