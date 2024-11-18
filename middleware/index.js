require('dotenv').config();

const jwt = require('jsonwebtoken');
// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET_KEY;
// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.query.token;
  if (!token) return res.redirect('/AdminPanel/signin')

  jwt.verify(token.split(' ')[1], JWT_SECRET, (err, user) => {
    console.log("user",user)
    // if (err) return res.redirect('/AdminPanel/signin')
    req.user = user;
    next();
  });
};

module.exports = authenticateToken