const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const dotenv = require('dotenv').config();

// register
const register = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).send('Error hashing password');
    }
    User.createUser(email, hash, (err, result) => {
      if (err) {
        return res.status(500).send('Error creating user');
      }
      res.status(201).send('User registered successfully');
    });
  });
};

// login by token
const login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Email and password are required');
  }
  User.getUserByEmail(email, (err, results) => {
    if (err) {
      return res.status(500).send('Error retrieving user');
    }
    if (results.length === 0) {
      return res.status(404).send('User not found');
    }
    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).send('Error comparing passwords');
      }
      if (!isMatch) {
        return res.status(400).send('Invalid password');
      }
      const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET, { expiresIn: '1h' }); // Corrected env variable access
      res.json({ token });
    });
  });
};

module.exports = {
  register,
  login
};
