const db = require('../models')
// Required modules
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const router = express.Router();
require('dotenv').config();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET_KEY;



// Sign In Route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  // Check if user exists
  const user = await db.User.findOne({
    where: {
        email
    },
    raw: true
  })
  if (!user) return res.status(400).json({ message: 'User not found' });

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).json({ message: 'Incorrect password' });

  // Generate JWT token
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ message: 'Signed in successfully', token });
});


router.get('/signin', (req, res) => {
    // console.log("/signin");
    
    return res.sendFile(path.join(__dirname, '../public/signin.html'));
})


module.exports = router;
  

  

